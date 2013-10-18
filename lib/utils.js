/**
 * Check if the protokol is valid.
 *
 * @param {String} source An Url.
 */
exports.checkProtokol = function(source) {
  var isHttp = source.indexOf('http:');
  var isHttps = source.indexOf('https:');
  var isFile = source.indexOf('file:');

  if (isHttp === 0) {
    //console.log('The source is a http:// source.');
    return {valid: true, protokol: 'http'};
  }
  else if (isHttps === 0) {
    //console.log('The source is a https:// source.');
    return {valid: true, protokol: 'https'};
  }
  else if (isFile === 0) {
    //console.log('The source is a file:// source.');
    return {valid: true, protokol: 'file'};
  }
  else {
    //console.log('not correct source protokol...');
    return {valid: false, protokol: 'not correct'};
  }
}
