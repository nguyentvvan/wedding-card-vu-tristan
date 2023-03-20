import fs from 'fs';

import messages from '../data/messages';

export const storeMessage = function(message) {
	messages.messages.push(message);
	fs.writeFileSync('data/messages.json', JSON.stringify(messages, null, 4));
	return messages;
}