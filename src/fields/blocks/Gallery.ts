import type { Block } from 'payload';

export const Gallery: Block = {
	slug: 'gallery',
	labels: {
		singular: 'Gallery',
		plural: 'Galleries',
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
			name: 'images',
			type: 'array',
			minRows: 1,
			fields: [
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media' as any,
					required: true,
				},
				{
					name: 'caption',
					type: 'text',
				},
			],
		},
		{
			name: 'layout',
			type: 'select',
			defaultValue: 'grid',
			options: [
				{
					label: 'Grid',
					value: 'grid',
				},
				{
					label: 'Masonry',
					value: 'masonry',
				},
				{
					label: 'Carousel',
					value: 'carousel',
				},
			],
		},
		{
			name: 'columns',
			type: 'select',
			defaultValue: '3',
			admin: {
				condition: (data) =>
					data.layout === 'grid' || data.layout === 'masonry',
			},
			options: [
				{
					label: '2 Columns',
					value: '2',
				},
				{
					label: '3 Columns',
					value: '3',
				},
				{
					label: '4 Columns',
					value: '4',
				},
			],
		},
	],
};
