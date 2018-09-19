//Rework of easyHTTP library

class EasyHTTP {
  // make http GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())    //returns a promise
      .then(data => resolve(data))          //so additional .then with resolve()
      .catch(error => reject(error));       //+error handling with reject()
    });   
  }   //this returns a promise

  //make http POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {                            //it's the second parameter of fetch, without it it's just a get request
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())      
      .then(data => resolve(data))            
      .catch(error => reject(error));         
    });
  }

  //make http PUT request
  put(url, data) {
    return new Promise((reject, resolve) => {
      fetch(url, {                            
        method: 'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }


  // make http DELETE request
  delete(url){
    return new Promise((resolve,reject) =>{
      fetch(url, {                            
        method: 'DELETE',
        headers: {
          'Content-type':'application/json'
        }
      })
      .then(response => response.json)
      .then(() => resolve('Resource deleted'))
      .catch(error => reject(error))
    });
  }

}