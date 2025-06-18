import type { Block } from 'payload';

export const Video: Block = {
	slug: 'video',
	labels: {
		singular: 'Video',
		plural: 'Videos',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'description',
			type: 'textarea',
		},
		{
			name: 'videoType',
			type: 'select',
			defaultValue: 'youtube',
			options: [
				{
					label: 'YouTube',
					value: 'youtube',
				},
				{
					label: 'Vimeo',
					value: 'vimeo',
				},
				{
					label: 'Direct URL',
					value: 'direct',
				},
			],
		},
		{
			name: 'videoId',
			type: 'text',
			label: 'YouTube/Vimeo URL or ID',
			admin: {
				description:
					'Paste the full YouTube/Vimeo URL or just the video ID. All formats work:\n• Full URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ\n• Short URL: https://youtu.be/dQw4w9WgXcQ\n• Video ID only: dQw4w9WgXcQ\n• Vimeo: https://vimeo.com/123456789',
			},
		},
		{
			name: 'videoUrl',
			type: 'text',
			label: 'Direct Video URL',
			admin: {
				condition: (data, siblingData) => {
					const videoType = data?.videoType || siblingData?.videoType;
					return videoType === 'direct';
				},
				description: 'Enter the direct video URL (MP4, WebM, etc.)',
			},
			required: true,
		},
		{
			name: 'thumbnail',
			type: 'upload',
			relationTo: 'media' as any,
			admin: {
				description:
					'Custom thumbnail (optional - will use video platform default if not provided)',
			},
		},
		{
			name: 'aspectRatio',
			type: 'select',
			defaultValue: '16:9',
			options: [
				{
					label: '16:9',
					value: '16:9',
				},
				{
					label: '4:3',
					value: '4:3',
				},
				{
					label: '1:1',
					value: '1:1',
				},
			],
		},
		{
			name: 'autoplay',
			type: 'checkbox',
			defaultValue: false,
			admin: {
				description: 'Note: Most browsers block autoplay with sound',
			},
		},
	],
};
