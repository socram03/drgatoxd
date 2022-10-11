// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import '../../lib/spotify';

type Data = {
	name: string;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
	const data = await global.spotify.getNowPlaying();
	res.status(200).json({ name: data?.item?.name || 'Not Playing' });
}
