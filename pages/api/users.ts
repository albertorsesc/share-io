import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../utils/client';
import { allUsersQuery } from '../../utils/queries';

type Data = {
  name: string
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  if (request.method === 'GET') {
    const data = await client.fetch(allUsersQuery());

    if (! data) {
      return response.json([]);
    }

    return response.status(200).json(data);
  }

}
