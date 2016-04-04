var xhr = require('xhr')
var example = require('./views/myexample.hbs')
var catinfo = require('./views/catinfo.hbs')

var getCatsButton = document.getElementById("getCats")
if(getCatsButton) {
  getCatsButton.addEventListener("click", function() {
    xhr.get('http://localhost:3000/v1/cats', function(err, data) {
      if(err) {console.log(err); return}
      var msg = JSON.parse(data.body)
      document.body.innerHTML = example(msg);
      addButtonListeners()
    })
  })
}

function addButtonListeners() {
  var getCatButtons = document.querySelectorAll(".cat")
  for(var i = 0; i < getCatButtons.length; i++) {
    // var id = getCatButtons[i].id
    getCatButtons[i].addEventListener("click", function() {
      xhr.get('http://localhost:3000/v1/cats/' + this.id, function(err, data) {
        if(err) {console.log(err); return}
        var msg = JSON.parse(data.body)
        document.body.innerHTML = catinfo(msg);
      })
    })
  }
}