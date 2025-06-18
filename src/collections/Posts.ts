import type { CollectionConfig } from 'payload';

import richText from '../fields/richText';
import { loggedIn } from './Pages/access/loggedIn';
import { formatSlug } from './Pages/hooks/formatSlug';

export const Posts: CollectionConfig = {
	slug: 'posts',
	access: {
		create: loggedIn,
		delete: loggedIn,
		read: () => true,
		update: loggedIn,
	},
	admin: {
		defaultColumns: ['title', 'author', 'publishedAt', 'updatedAt'],
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			type: 'text',
			admin: {
				position: 'sidebar',
			},
			hooks: {
				beforeValidate: [formatSlug('title')],
			},
			index: true,
			label: 'Slug',
		},
		{
			name: 'excerpt',
			type: 'textarea',
			label: 'Excerpt',
			required: true,
		},
		{
			name: 'featuredImage',
			type: 'upload',
			relationTo: 'media' as any,
			label: 'Featured Image',
			required: true,
		},
		{
			name: 'author',
			type: 'relationship',
			relationTo: 'users',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'publishedAt',
			type: 'date',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'tags',
			type: 'text',
			hasMany: true,
			admin: {
				position: 'sidebar',
			},
		},
		richText(),
	],
	versions: {
		drafts: {
			autosave: {
				interval: 375,
			},
		},
	},
};
