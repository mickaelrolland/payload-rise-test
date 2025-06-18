import type { Block } from 'payload';

import richText from '../richText';

export const Banner: Block = {
	slug: 'banner',
	labels: {
		singular: 'Banner',
		plural: 'Banners',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			label: 'Title',
		},
		{
			name: 'subtitle',
			type: 'text',
			label: 'Subtitle',
		},
		richText({
			name: 'content',
			label: 'Content',
		}),
		{
			name: 'backgroundColor',
			type: 'select',
			defaultValue: 'light',
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
					label: 'Primary',
					value: 'primary',
				},
				{
					label: 'Secondary',
					value: 'secondary',
				},
			],
			label: 'Background Color',
		},
		{
			name: 'textAlign',
			type: 'select',
			defaultValue: 'left',
			options: [
				{
					label: 'Left',
					value: 'left',
				},
				{
					label: 'Center',
					value: 'center',
				},
				{
					label: 'Right',
					value: 'right',
				},
			],
			label: 'Text Alignment',
		},
		{
			name: 'size',
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
			],
			label: 'Section Size',
		},
	],
};
