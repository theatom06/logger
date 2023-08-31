import OS from 'node:os';
import { join } from 'node:path';
import { mkdirSync, existsSync } from 'node:fs';
import IO from '@atom06/file';

export default async function createLoggerModule(projectName: string) {
    const logsDir = join(OS.homedir(), '.' + projectName + "-logs");

    // Check if the logs directory exists, if not, create it
    if (!existsSync(logsDir)) {
        mkdirSync(logsDir, { recursive: true });
    }

    const NOW = Date.now();
    const PROCESS_UPTIME = process.uptime() * 1000;
    const PROCESS_START_TIME = new Date(NOW - PROCESS_UPTIME);

    const formattedDate = (date = PROCESS_START_TIME) => `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}_${Math.floor(Math.random() * 10000)}`;

    const LOG_FILE_PATH = join(logsDir, formattedDate() + '.log.txt');
    const logFile = new IO(LOG_FILE_PATH, 'utf-8');

    async function getVersion() {
        const PACKAGE_FILE_PATH = join(process.cwd(), './package.json');
        const [hadError, data] = await new IO(PACKAGE_FILE_PATH).read();

        if (hadError) {
            return JSON.parse(data as string).version;
        } else {
            return `!VER+` + data;
        }
    }

    const osInfo = [OS.platform(), OS.type(), OS.release(), OS.arch()];

    await logFile.append(`
================================================================
                          ${projectName}
    Program  : ${projectName}
    Version  : ${await getVersion()}
    Platform : ${osInfo.join(' ')}
    Time     : ${formattedDate(PROCESS_START_TIME).split('_')[0].replace(/-/g, ' ')} 
================================================================
                            LOGS
Log Levels:
    - INFO: General information about the application.
    - WARN: Warnings and non-critical issues.
    - !ERR: Errors that require attention.
    - $LOG: Generic log entries.\n\n\n`);

    const logger = {
        warn: async (message: string, timestamp = Date.now()) => {
            const logLine = `WARN-${timestamp}::${message}\n`;

            const [success, error] = await logFile.append(logLine);
            console.log(logLine);

            if (!success) throw error;
        },

        error: async (message: string, timestamp = Date.now()) => {
            const logLine = `!ERR-${timestamp}::${message}\n`;

            const [success, error] = await logFile.append(logLine);
            console.log(logLine);

            if (!success) throw error;
        },

        info: async (message: string, timestamp = Date.now()) => {
            const logLine = `INFO-${timestamp}::${message}\n`;

            const [success, error] = await logFile.append(logLine);
            console.log(logLine);

            if (!success) throw error;
        },

        log: async (message: string, timestamp = Date.now()) => {
            const logLine = `$LOG-${timestamp}::${message}\n`;

            const [success, error] = await logFile.append(logLine);
            console.log(logLine);

            if (!success) throw error;
        },
    };

    return logger;
}

