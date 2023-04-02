import excuteQuery from '../../lib/db';

export default async (req, res) => {
	try {
		const result = await excuteQuery({
				query: 'SELECT * FROM book',
		});
		res.status(200).json(result);
  } catch ( error ) {
		console.log(error);
  }
};