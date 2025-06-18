import type { Block } from 'payload';

import richText from '../richText';

export const FullWidthContent: Block = {
	slug: 'fullWidthContent',
	labels: {
		singular: 'Full Width Content',
		plural: 'Full Width Content Blocks',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Title',
		},
		richText({
			name: 'content',
			label: 'Content',
			required: true,
		}),
		{
			name: 'backgroundColor',
			type: 'select',
			defaultValue: 'white',
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
			label: 'Background Color',
		},
		{
			name: 'hasPattern',
			type: 'checkbox',
			defaultValue: false,
			label: 'Add Pattern Background',
		},
		{
			name: 'maxWidth',
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
					label: 'Full Width',
					value: 'full',
				},
			],
			label: 'Content Max Width',
		},
	],
};
