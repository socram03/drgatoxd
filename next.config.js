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
				source: '/github',
				destination: links.github,
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
