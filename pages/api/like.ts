import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../utils/client';
import { uuid } from 'uuidv4';

type Data = {
  name: string
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  if (request.method === 'PUT') {
    const { userId, postId, like } = request.body;

    const data = like ? await client
      .patch(postId)
      .setIfMissing({ likes: [] })
      .insert(
        'after',
        'likes[-1]',
        [{ _key: uuid(), _ref: userId }]
      )
      .commit() :
      await client
        .patch(postId)
        .unset([`likes[_ref=="${userId}"]`])
        .commit();


    return response.status(200).json(data);
  }

}
