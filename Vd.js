const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/albums?fbclid=IwAR06Gya0ZucEhzrBgJ_Wnvx9n0EYf_Kszm-jwzR1zXzo2I_7EtiE92yeZF8')
  .then(body => {
    console.log(body);
  })
  .catch(error => {
    console.log(error);
  })