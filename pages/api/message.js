import { getAllMessages, storeMessage } from '../../helpers/storeMessage';


export default function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body;
    message.id = new Date().getTime();
    const messages = storeMessage(message);
    res.status(200).json(messages);
  } else if (req.method === 'GET') {
    const messages = getAllMessages();
    res.status(200).json(messages);
  }
}