import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';
import { topicPostsQuery } from '../../../utils/queries';

type Data = {
  name: string
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  if (request.method === 'GET') {
    const { topic }: any = request.query;
    const videosQuery = topicPostsQuery(topic);

    const videos = await client.fetch(videosQuery);

    response.status(200).json(videos);
  }

}
