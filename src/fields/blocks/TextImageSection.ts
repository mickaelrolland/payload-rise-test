import type { Block } from 'payload';

import richText from '../richText';

export const TextImageSection: Block = {
	slug: 'textImageSection',
	labels: {
		singular: 'Text & Image Section',
		plural: 'Text & Image Sections',
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
		}),
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true,
			label: 'Image',
		},
		{
			name: 'imagePosition',
			type: 'select',
			defaultValue: 'right',
			options: [
				{
					label: 'Left',
					value: 'left',
				},
				{
					label: 'Right',
					value: 'right',
				},
			],
			label: 'Image Position',
		},
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
