import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		localPatterns: [
			{
				pathname: '/api/media/**',
				search: '',
			},
		],
		remotePatterns: [
			{
				hostname: 'localhost',
			},
		],
	},
	// Your Next.js config here
};

export default withPayload(nextConfig);
