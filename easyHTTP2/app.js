//initialize new EasyHTTP
const http = new EasyHTTP;

//user data
const data = {
  name: 'John Kurva',
  username: 'YourStomatologist',
  email: 'john.kurva@gmail.com'
}

// get users
//we want to be asynchronous here so we don't assign the request to a variable
//our method from library returns a promise
//so we have to use .then and .catch
http.get('https://api.github.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// post user
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));

// update user
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// delete user

http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));