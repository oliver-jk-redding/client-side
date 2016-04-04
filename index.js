var xhr = require('xhr')
var example = require('./views/example.hbs')
// var request = require('request')

// xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
// xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
xhr.get({
    uri: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }, function(err, data) {
// request.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if(err) {console.log(err); return}
  console.log(JSON.parse(data.body).query.pages['15580374'].title)
  var msg = JSON.parse(data.body).query.pages['15580374'].title
  document.body.innerHTML = example(msg);
})



