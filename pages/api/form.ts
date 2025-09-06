import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('testing');
  if (req.method === 'POST') {
    console.log(req.body);
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
