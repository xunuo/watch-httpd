/*
  recommend use forever
  example:
  forever start watch-config.js
  forever stop watch-config.js
*/

var fs = require('fs'),
  log4js = require('log4js'),
  exec = require('child_process').exec, child,

  log4js = require('log4js');
  log4js.loadAppender('file');
  log4js.addAppender(log4js.appenders.file('error.log'), 'error'),
  logger = log4js.getLogger('error');
  logger.setLevel('ERROR');

fs.watchFile('httpd.conf', function (curr, prev) {
  console.log('the current mtime is: ' + curr.mtime);
  console.log('the previous mtime was: ' + prev.mtime);

  child = exec('/sbin/service httpd restart',
    function (error, stdout, stderr) {
        logger.error(stderr);
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
          logger.error(error);
        }
    });

});