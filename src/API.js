import React from 'react';

class API {
  //let token = 'token not set';
  //let myHeaders = new Headers();


  constructor() {
    // console.log('API constructor');
    this.sessionInfo = {
      token: ''
    }

    this.myHeaders = new Headers();
    this.myHeaders.append('Content-Type', 'application/json');
    this.myInit = { method: 'POST',
                 headers: this.myHeaders,
                 cache: 'default' };
    this.token = 'token not set';
    fetch('https://api.sppx.io/rest/user/token', this.myInit).then(res => res.json().then(data => this.token = data['token']));

  }
getToken = () => this.token;

setToken = () => {
  this.myHeaders.append('X-CSRF-Token', this.token);
}

login = () => {

   let logHeaders = new Headers();
   logHeaders.append('Content-Type', 'application/json');

   logHeaders.append('X-CSRF-Token', this.token);

  let logInit = {
    method: 'POST',
    headers: logHeaders,
    body: JSON.stringify({
 	username: 'flippanthubris',
 	password: '1875Jung1961!'
 }),
  cache: 'default'
 };

console.log(logHeaders);




 //  this.setToken();
 //
 //
 //
 //
 //
 //  console.log('myINit' + myInit);
   fetch('https://api.sppx.io/rest/user/logout', logInit).then(res => console.log(res.json()));
}

}
export default API;
