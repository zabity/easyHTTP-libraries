// Easy HTTP

const http = new easyHTTP();

// GET Posts
    http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
      if(error){
        console.log(error);
      } else {
        console.log(response);
      }
    });

//GET single post
  //just change the url accordingly
    http.get('https://jsonplaceholder.typicode.com/posts/99', function(error, response){
      if(error){
        console.log(error);
      } else {
        console.log(response);
      }
    });


// Create Data
const data = {
  title: 'Custom Post',
  body: 'Bla Bla Bla & Bla'
};


//POST a post
//vel: create a post
  http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
      console.log(err);
    } else {
      console.log(post);
    }
  });

// PUT a post
//vel: update a post
    http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err,post){
      if(err){
        console.log(err);
      } else {
        console.log(post);
      }
    });

//DELETE Post
    http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
      if(error){
        console.log(error);
      } else {
        console.log(response);
      }
    });