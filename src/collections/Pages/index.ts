import type { CollectionConfig } from 'payload';

import {
	Banner,
	Card,
	Content,
	FullWidthContent,
	Gallery,
	Hero,
	TextImageSection,
	Video,
} from '../../fields/blocks';
import richText from '../../fields/richText';
import { loggedIn } from './access/loggedIn';
import { formatSlug } from './hooks/formatSlug';

export const Pages: CollectionConfig = {
	slug: 'pages',
	access: {
		create: loggedIn,
		delete: loggedIn,
		read: () => true,
		update: loggedIn,
	},
	admin: {
		defaultColumns: ['title', 'slug', 'updatedAt'],
		livePreview: {
			url: ({ data }) => {
				const isHomePage = data.slug === 'home';
				return `${process.env.NEXT_PUBLIC_SERVER_URL}${!isHomePage ? `/${data.slug}` : ''}`;
			},
		},
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
			name: 'layout',
			type: 'blocks',
			blocks: [
				Banner,
				Hero,
				Content,
				TextImageSection,
				FullWidthContent,
				Gallery,
				Card,
				Video,
			],
			required: true,
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
