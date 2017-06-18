const request = require('request');
const { getDefer } = require('./common');

module.exports = (timeout = 5000) => {
  const deferred = getDefer();
  request.get({
    url: 'http://ip.cn/',
    headers: {
      'User-Agent': 'curl/7.51.0'
    },
    timeout: parseInt(timeout, 10)
  }, (err, res) => {
    if (err) {
      deferred.resolve('');
    } else {
      try {
        deferred.resolve(res.body.split(' ')[1].replace('IP：', ''));
      } catch (e) {
        deferred.resolve('');
      }
    }
  });
  return deferred.promise;
};
