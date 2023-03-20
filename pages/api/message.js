import { storeMessage } from '../../helpers/storeMessage';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body;
    message.id = new Date().getTime();
    let messages = storeMessage(message);
    res.status(200).json(messages);
  }
}