export default function getBaseUrl() {
  var inDevelopment = '';
  if(window.location.hostname == 'localhost'){
    return inDevelopment = 'http://localhost:3001/';
  }else{
    return inDevelopment = '/';
  }

  //const inDevelopment = window.location.hostname === 'localhost';
  //return inDevelopment ? 'http://localhost:3001' : '/';
}