/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['nocache.advaith.workers.dev', 'img.shields.io']
	}
};

module.exports = nextConfig;
