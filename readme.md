# atom06/logger

Its a simple logger made by me for my project peerplex _(its a secret)_ but then it was good fo i published it on npm for you all to use and enjoy

### Installation

```bash
$ npm install @atom06/logger
```

## How it Works 
```javascript
import logger_module from "@atom06/logger" //import...duh

const logger = logger_module("your app name") //instalize with out app name

logger.log("log", Date.now()?) //log anything u wanna and the date is optional

logger.error("error")

logger.info("info")

logger.warn("warn")
```

What did that just do?

1. it created a hidden folder called .appname-logs in the homedir

2. it created a file MM-DD-YYYY_RRR.log.txt, where RRR is random number so i can make as many as i want to without freeing repeating number, YYYY year, DD date, MM month all nnumber

3. u logged 
```
================================================================
                          a
    Program  : a
    Version  : 1.0.0
    Platform : linux Linux 5.15.0-72-generic x64
    Time     : 8 31 2023 
\================================================================
                            LOGS
Log Levels:
    - INFO: General information about the application.
    - WARN: Warnings and non-critical issues.
    - !ERR: Errors that require attention.
    - $LOG: Generic log entries.$LOG-1693482024663::this is bulls
!ERR-1693482024863:: error
INFO-169348202476400:: info
WARN-1264910.168:: warn
```

were the middle numbers are the time of log

thanks!!