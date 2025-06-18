import type { CollectionConfig } from 'payload';

import { loggedIn } from './Pages/access/loggedIn';
import { formatSlug } from './Pages/hooks/formatSlug';

export const Categories: CollectionConfig = {
	slug: 'categories',
	access: {
		create: loggedIn,
		delete: loggedIn,
		read: () => true,
		update: loggedIn,
	},
	admin: {
		useAsTitle: 'name',
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			type: 'text',
			hooks: {
				beforeValidate: [formatSlug('name')],
			},
			index: true,
			label: 'Slug',
		},
		{
			name: 'description',
			type: 'textarea',
		},
		{
			name: 'color',
			type: 'text',
			label: 'Color (hex)',
			admin: {
				placeholder: '#000000',
			},
		},
	],
};
