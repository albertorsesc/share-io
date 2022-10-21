import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../utils/client';

type Data = {
  name: string
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  if (request.method === 'POST') {
    const user = request.body;

    client.createIfNotExists(user)
    .then(() => response.status(200).json('login-success'));
  }

}
