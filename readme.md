# @atom06/logger

**@atom06/logger** is a versatile Node.js **logger module** designed to simplify logging and create log files for your projects. It allows you to log various types of messages, such as information, warnings, errors, and generic log entries, to timestamped log files. The log files are stored in a user-defined directory and follow a structured format for easy readability and analysis.

## Features

- Log Types: This logger module supports four types of log entries:

  - info: General information about the application.
  - warn: Warnings and non-critical issues.
  - error: Errors that require attention.
  - log: Generic log entries.
  - Timestamps: Each log entry is timestamped with the current date and time, making it easy to track when events occurred.

- Log File Creation: The module automatically creates a log file with a filename based on the current date. If the log directory does not exist, it is created as well.

- Version Information: The module includes information about your project's version, platform, and start time in the log header.

- Log Levels: The README provides a brief explanation of the available log levels and their meanings.
- Type support: Since this is made with typescript it has types by default

## Installation

To use **@atom06/logger** in your Node.js project, you can install it via npm, yarn or anything:

```bash
$ npm install @atom06/logger
# or
$ yarn add @atom06/logger
```

## Usage
```javascript
import createLoggerModule from '@atom06/logger';

// Create a logger instance with your project name
const logger = await createLoggerModule('YourProjectName');

// Log an information message
await logger.info('This is an information message.');

// Log a warning message
await logger.warn('This is a warning message.');

// Log an error message
await logger.error('This is an error message.');

// Log a generic log entry
await logger.log('This is a generic log entry.');
```

### What did I just do?

1. You made a log file at is stored in the user's home directory under a hidden folder named after your project _(e.g., ~/.YourProjectName-logs)_.

2. It created a file MM-DD-YYYY_RRR.log.txt, where RRR is a random number so you can make as many as you want to without freeing repeating numbers, YYYY year, DD date, MM month all nnumber

3. And you logged something into that

## Log Structure

It follows the following format: 
```
LOG_LEVEL-TIMESTAMP::MESSAGE
```
- _**LOG_LEVEL**_ represents the log level _(e.g., INFO, WARN, !ERR, $LOG)_.
- _**TIMESTAMP**_ is the timestamp when the log entry was created.
- _**MESSAGE**_ is the actual log message.

Here's an example of what a log entry might look like in the log file

```
INFO-123456::This is an information message.
```

## Dependencies
**@atom06/logger** uses the following Node.js built-in modules and external dependencies:
- [`@atom06/file`](https://npm.im/@atom06/file): A dependency for file I/O operations.

## LICENSE

This is licensed under [Carbon license](https://gist.githubusercontent.com/TheAtom06/6d520406e0d1d7612f29d31517888d90/raw/d059763580fe615f3f0d20cd105aa3c79b22727f/Carbon%2520License.md) ALTHOUGH NOT PLACED CODE, IT IS LICENSED UNDER THE CARBON LICENSE
