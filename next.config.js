const links = require('./src/config/links.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/discord',
				destination: links.rrss.discord,
				permanent: true
			},
			{
				source: '/twitter',
				destination: links.rrss.twitter,
				permanent: true
			},
			{
				source: '/instagram',
				destination: links.rrss.instagram,
				permanent: true
			},
			{
				source: '/youtube',
				destination: links.rrss.youtube,
				permanent: true
			},
			{
				source: '/github',
				destination: links.github,
				permanent: true
			},
			{
				source: '/free-nitro',
				destination: 'https://www.youtube.com/watch?v=mCdA4bJAGGk',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
