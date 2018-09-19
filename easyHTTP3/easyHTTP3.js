//Rework of easyHTTP library with async await

class EasyHTTP {
  // make http GET request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }   

  //make http POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    }); 
    const resData = await response.json();
    return resData;
  }

  //make http PUT request
  async put(url, data) {
    const response = await fetch(url, {                           
      method: 'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }


  // make http DELETE request
  async delete(url){
    const response = await fetch(url, {                            
      method: 'DELETE',
      headers: {
        'Content-type':'application/json'
      }
    });
    const resData = await 'resource deleted';
    return resData;
  }

}