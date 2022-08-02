// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default function handler(_: unknown, res: NextApiResponse<Data>) {
	res.redirect('https://www.youtube.com/channel/UCHY3_scfbXSPc5B9SLgqPKQ');
}
