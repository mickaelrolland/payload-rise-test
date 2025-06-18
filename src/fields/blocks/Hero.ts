import type { Block } from 'payload';

export const Hero: Block = {
	slug: 'hero',
	labels: {
		singular: 'Hero',
		plural: 'Heroes',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'subtitle',
			type: 'textarea',
		},
		{
			name: 'backgroundImage',
			type: 'upload',
			relationTo: 'media' as any,
			required: false,
		},
		{
			name: 'overlay',
			type: 'select',
			defaultValue: 'dark',
			options: [
				{
					label: 'None',
					value: 'none',
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
		{
			name: 'height',
			type: 'select',
			defaultValue: 'medium',
			options: [
				{
					label: 'Small',
					value: 'small',
				},
				{
					label: 'Medium',
					value: 'medium',
				},
				{
					label: 'Large',
					value: 'large',
				},
				{
					label: 'Full Screen',
					value: 'fullscreen',
				},
			],
		},
		{
			name: 'buttons',
			type: 'array',
			maxRows: 2,
			fields: [
				{
					name: 'label',
					type: 'text',
					required: true,
				},
				{
					name: 'url',
					type: 'text',
					required: true,
				},
				{
					name: 'style',
					type: 'select',
					defaultValue: 'primary',
					options: [
						{
							label: 'Primary',
							value: 'primary',
						},
						{
							label: 'Secondary',
							value: 'secondary',
						},
						{
							label: 'Default',
							value: 'default',
						},
					],
				},
			],
		},
	],
};
