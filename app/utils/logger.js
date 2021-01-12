const fs = require('fs');
const path = require('path');
const { app } = require('electron');
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

/**
 * Get application data folder path
 */
const appFolder = app.getPath('userData');

/**
 * Logs will be stored in the app-data/logs
 *
 * @type {string}
 */
const logsDirPath = path.join(appFolder, 'logs');

/**
 * Create logs dir if not exist
 */
if (!fs.existsSync(logsDirPath)) {
  fs.mkdirSync(logsDirPath);
}

/**
 * Logger can save log to file in appData/logs dir
 *
 * @example logger.log('my log %s', variable);
 * @example logger.debug('my log %s', variable);
 * @example logger.info('my log');
 * @example logger.warn('my log');
 * @example logger.error('my log');
 */
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp({
      format: 'HH:mm:ss',
    }),
    winston.format.printf(info => `${info.timestamp} [${info.level}] ${info.message}` + (info.splat !== undefined ? `${info.splat}` : ' ') + (info.stack !== undefined ? `\n${info.stack}` : ''))
  ),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      dirname: logsDirPath,
      filename: '%DATE%.log',
    }),
  ],
});

module.exports = logger;
