import fs from 'fs';

import data from '../data/messages';

export const getAllMessages = function() {
	const fileContents = fs.readFileSync('data/messages.json', 'utf8');
	const object = JSON.parse(fileContents);
	return object.messages.reverse();
}

export const storeMessage = function(message) {
	data.messages.push(message);
	fs.writeFileSync('data/messages.json', JSON.stringify(data, null, 4));
	return message;
}