import type { NextApiRequest, NextApiResponse } from 'next'

type simpleAPIResponse = {
    HTTPcode: Number,
    message: String
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<simpleAPIResponse>
  ) {
    // Verify request is post
    if (req.method !== 'POST') {
        res.status(405).send({ HTTPcode: 405, message: 'Only POST requests allowed' })
        return
      }
    console.log(req)
    res.status(200)
  }
