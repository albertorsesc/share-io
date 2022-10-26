import type { NextApiRequest, NextApiResponse } from 'next';
import { uuid } from 'uuidv4';
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
  } else if (request.method === 'PUT') {
    const { comment, userId } = request.body;
    const { id }: any = request.query;

    const data = await client
      .patch(id)
      .setIfMissing({ comments: [] })
      .insert(
        'after',
        'comments[-1]',
        [{
          comment,
          _key: uuid(),
          postedBy: {
            _type: 'postedBy',
            _ref: userId
          }
        }]
      )
      .commit();

      response.status(200).json(data);
  }

}
