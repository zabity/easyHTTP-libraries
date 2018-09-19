// easyHTTP library
//in order for it to work it has to be put before app.js script tag in html 

//------------------------------------------------------------------------
//function that instantiates a new XHR object
function easyHTTP(){
  this.http = new XMLHttpRequest();
}

//------------------------------------------------------------------------
// Make an HTTP GET Request (asynchronously)
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

            //this won't work because of scope issues
            // this in if statement pertains to the callback function, not the main function
              // this.http.onload = function(){
              //   if(this.http.status === 200){
              //     console.log(this.http.responseText);
              //   }
              // }

            //this will work, because of arrow function syntax
              // this.http.onload = () => {
              //   if(this.http.status === 200){
              //     console.log(this.http.responseText);
              //   }
              // }

  //this will work also, still being ES5
  //define a variable (usually 'self' or 'that') befor the onload function
  //it will change the scope
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    } else {
      callback('Error: '+ self.http.status);
    }
  }

  this.http.send();
}

//------------------------------------------------------------------------
// Make an HTTP POST Request (asynchronously)
easyHTTP.prototype.post = function(url, data, callback){
  //open is almost the same as in GET
  this.http.open('POST', url, true)

  //set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  //onload
  let self = this;
  this.http.onload = function(){
    //we don't need to check the status in POST request
    callback(null, self.http.responseText);
  }


  // we send data so we need to JSON.stringify our data object
  this.http.send(JSON.stringify(data));
}

//------------------------------------------------------------------------
// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
  //open is almost the same as in GET
  this.http.open('PUT', url, true)

  //set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  //onload
  let self = this;
  this.http.onload = function(){
    //we don't need to check the status in POST request
    callback(null, self.http.responseText);
  }

  // we send data so we need to JSON.stringify our data object
  this.http.send(JSON.stringify(data));
}

//------------------------------------------------------------------------
// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url,callback){
  this.http.open('DELETE', url, true)

  let self = this;
  this.http.onload = function (){
    if(self.http.status === 200){
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

