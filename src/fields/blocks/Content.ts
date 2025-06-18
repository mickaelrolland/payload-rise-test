import type { Block } from 'payload';

import richText from '../richText';

export const Content: Block = {
	slug: 'content',
	labels: {
		singular: 'Content',
		plural: 'Content Blocks',
	},
	fields: [
		{
			name: 'columns',
			type: 'select',
			defaultValue: 'single',
			options: [
				{
					label: 'Single Column',
					value: 'single',
				},
				{
					label: 'Two Columns',
					value: 'two',
				},
			],
		},
		richText({
			name: 'content',
		}),
		{
			admin: {
				condition: (data) => data.columns === 'two',
			},
			...richText({
				name: 'secondColumn',
			}),
		},
	],
};
