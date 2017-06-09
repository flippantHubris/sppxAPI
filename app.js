import React from 'react';


const getToken = () => {

   let myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
  //
  let myInit = { method: 'POST',
               headers: myHeaders,

               cache: 'default' };

let tok = 'toooken';

  fetch('https://api.sppx.io/rest/user/token', myInit).then(res => res.json().then( data => console.log(data['token']) ));

//let res = fetch('https://api.sppx.io/rest/user/token', myInit);

//let resJSON = res.json();

  return tok;
}

getToken();
