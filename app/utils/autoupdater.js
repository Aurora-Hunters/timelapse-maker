const  { autoUpdater } = require('electron-updater');
const logger = require('./logger');

/**
 * Check for updates every hour
 */
const CHECK_FOR_UPDATES_INTERVAL = 60 * 60 * 1000;

/**
 * Autoupdater events
 */
autoUpdater.on('checking-for-update', () => {
  logger.debug('Checking for update');
});

autoUpdater.on('error', (error) => {
  logger.error('Error while checking for updates', error);
});

autoUpdater.on('update-available', (updateInfo) => {
  logger.debug('Update is available:', updateInfo);
});

autoUpdater.on('update-not-available', (updateInfo) => {
  logger.debug('No updates are available', updateInfo);
});

autoUpdater.on('download-progress', (progressInfo) => {
  const logMessage = `speed ${progressInfo.bytesPerSecond} b/s; progress ${progressInfo.percent}%; downloaded ${progressInfo.transferred} out of ${progressInfo.total} bytes`;

  logger.debug(logMessage);
});

autoUpdater.on('update-downloaded', (updateInfo) => {
  logger.debug('Update is ready', updateInfo);

  /**
   * Uncomment the following string to force quit app and install update
   */
  // autoUpdater.quitAndInstall();
});

/**
 * Check for updates on script start
 *
 * Silently: autoUpdater.checkForUpdates();
 * With notification: autoUpdater.checkForUpdatesAndNotify();
 */
autoUpdater.checkForUpdatesAndNotify();

/**
 * Check for updates with given time interval
 */
setInterval(() => {
  autoUpdater.checkForUpdatesAndNotify();
}, CHECK_FOR_UPDATES_INTERVAL);
