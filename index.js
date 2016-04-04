var xhr = require('xhr')
var example = require('./views/example.hbs')
// var request = require('request')

// xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
// xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
// var client = new XMLHttpRequest();
// client.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json');
// client.setRequestHeader('Access-Control-Allow-Origin', '*');
// client.send();


// xhr.get({
//     uri: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json',
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     }
//   }, function(err, data) {

xhr.get('~/Workspace/meowtown/meowtown/app.js', function(err, data) {
// request.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if(err) {console.log(err); return}
  console.log(data.body)
  var msg = JSON.parse(data.body)
  document.body.innerHTML = example(msg);
})



