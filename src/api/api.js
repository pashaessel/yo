import { SERVER_PATH } from './config';



export async function createCampaign(data) {
  //TODO 1. Перенести определение времени на плечи БД
  data.createdDate = new Date().toLocaleDateString();
  data.owner = 1;
  let req = await fetch(SERVER_PATH + '/api/campaigns', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  console.log(req);
}