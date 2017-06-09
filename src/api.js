import React from 'react';


const api = () => {
  state = { token: '' };


  console.log('api called');

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let myInit = { method: 'POST',
               headers: myHeaders,

               cache: 'default' };

  //fetch('https://api.sppx.io/rest/user/token', myInit).then(res => res.json().then( data => console.log(data['token']) ));
return fetch('https://api.sppx.io/rest/user/token', myInit).then(res => res.json().then( data => {
  console.log(data['token']);



  //console.log('token = ' + token);


  return data['token'];


}));



return token;
}


export default api;
