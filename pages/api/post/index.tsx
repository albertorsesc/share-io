import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries'

type Data = {
  name: string
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  if (request.method === 'GET') {
    const query = allPostsQuery();

    const data = await client.fetch(query);

    response.status(200).json(data);

  } else if (request.method === 'POST') {
    const document = request.body;
    client.create(document).then(() => response.status(201).json('Video Created'))
  }

}
