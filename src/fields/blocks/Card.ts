import type { Block } from 'payload';

export const Card: Block = {
	slug: 'cards',
	labels: {
		singular: 'Cards',
		plural: 'Card Sections',
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
			name: 'cards',
			type: 'array',
			minRows: 1,
			maxRows: 6,
			fields: [
				{
					name: 'title',
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					type: 'textarea',
					required: true,
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media' as any,
				},
				{
					name: 'link',
					type: 'group',
					fields: [
						{
							name: 'url',
							type: 'text',
						},
						{
							name: 'label',
							type: 'text',
							defaultValue: 'Learn More',
						},
					],
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
					label: 'Horizontal',
					value: 'horizontal',
				},
			],
		},
		{
			name: 'columns',
			type: 'select',
			defaultValue: '3',
			admin: {
				condition: (data) => data.layout === 'grid',
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
