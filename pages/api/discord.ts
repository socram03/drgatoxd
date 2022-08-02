// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default function handler(_: unknown, res: NextApiResponse<Data>) {
	res.redirect('https://discord.gg/Z4wj6gYyvE');
}
