export default function createLoggerModule(projectName: string): Promise<{
    warn: (message: string, timestamp?: number) => Promise<void>;
    error: (message: string, timestamp?: number) => Promise<void>;
    info: (message: string, timestamp?: number) => Promise<void>;
    log: (message: string, timestamp?: number) => Promise<void>;
}>;
//# sourceMappingURL=logs.d.ts.map