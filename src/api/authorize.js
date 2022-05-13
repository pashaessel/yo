import { SERVER_PATH } from './config';

async function createUser(data) {
	let req = await fetch(SERVER_PATH + '/api/sign-in', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	})
}