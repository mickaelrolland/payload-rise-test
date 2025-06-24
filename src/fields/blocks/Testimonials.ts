import type { Block } from 'payload';

export const Testimonials: Block = {
	slug: 'testimonials',
	labels: {
		singular: 'Testimonials',
		plural: 'Testimonials Sections',
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
			name: 'testimonials',
			type: 'array',
			minRows: 1,
			maxRows: 6,
			fields: [
				{
					name: 'name',
					type: 'text',
					required: true,
				},
				{
					name: 'role',
					type: 'text',
					required: true,
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media' as any,
				},
				{
					name: 'testimonial',
					type: 'textarea',
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
		{
			name: 'backgroundColor',
			type: 'select',
			defaultValue: 'dark',
			options: [
				{
					label: 'White',
					value: 'white',
				},
				{
					label: 'Light',
					value: 'light',
				},
				{
					label: 'Dark',
					value: 'dark',
				},
			],
		},
	],
};
