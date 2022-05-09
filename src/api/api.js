const axios = require('axios');
const SERVER_PATH = 'http://localhost:3000'


export function createCampaign(data) {
	axios.post(SERVER_PATH + '', data,{
    
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}