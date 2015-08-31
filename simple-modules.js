
(function(){
  //Loading async.. need promises
  var $src = document.querySelector("script[data-modules]");
  var mods = $src.dataset["modules"].split(",");
  
  load(mods);

  function load(mods) {
    if (mods.length > 0) {
      var url = mods.shift().trim();

      if(url.indexOf(".json") !== -1){
        load_json(url, mods);
      }else{
        load_js(url);
        load(mods);
      }
    }
  }

  function load_js(url) {
    var script = document.createElement("script");
    script.type ="text/javascript"
    script.src = url;
    $src.parentElement.appendChild(script)
  }

  function load_json(url, mods) {
    var handleJSON = function handleJSON(data){
      if (data) {
        for(var i=0; i < data.length; i++){
          load_js(data[i]);
        }
      }else{
        console.log("Got no data from: " + url);
      }
      //continue processing mods.
      load(mods);
    }

    getJSON(url, handleJSON);
  }

  //From: https://mathiasbynens.be/notes/xhr-responsetype-json
  function getJSON(url, successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        successHandler && successHandler(xhr.response);
      } else {
        errorHandler && errorHandler(status);
      }
    };
    xhr.send();
  }; 
})();

