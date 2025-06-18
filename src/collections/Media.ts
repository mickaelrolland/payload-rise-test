import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
	slug: 'media',
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: 'filename',
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
			label: 'Alt Text',
			required: true,
		},
	],
	upload: {
		adminThumbnail: 'thumbnail',
		focalPoint: false,
		imageSizes: [
			{
				name: 'thumbnail',
				width: 300,
				height: 300,
				position: 'centre',
			},
			{
				name: 'mobile',
				width: 768,
				height: undefined,
				position: 'centre',
			},
			{
				name: 'tablet',
				width: 1024,
				height: undefined,
				position: 'centre',
			},
			{
				name: 'desktop',
				width: 1440,
				height: undefined,
				position: 'centre',
			},
		],
		mimeTypes: ['image/*'],
	},
};
