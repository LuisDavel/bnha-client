import { NextApiRequest, NextApiResponse } from 'next';
import { api } from 'lib/axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    const response = await api.post('user', req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save user' });
  }
}
