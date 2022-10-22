import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';
import { postDetailQuery } from '../../../utils/queries';

type Data = {
  name: string
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  if (request.method === 'GET') {
    const { id } = request.query;
    const query = postDetailQuery(id);

    const data = await client.fetch(query);

    response.status(200).json(data[0]);
  }

}
