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
		defaultColumns: ['title', 'pageType', 'parent', 'slug', 'updatedAt'],
		listSearchableFields: ['title', 'slug', 'pageType'],
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
			name: 'pageType',
			type: 'select',
			options: [
				{ label: 'Landing Page', value: 'landing' },
				{ label: 'Destination Hub', value: 'destination' },
				{ label: 'Content Page', value: 'content' },
				{ label: 'Experience Page', value: 'experience' },
			],
			required: true,
			admin: {
				position: 'sidebar',
				description:
					'Select the type of page to organize your navigation hierarchy',
			},
		},
		{
			name: 'parent',
			type: 'relationship',
			relationTo: 'pages',
			filterOptions: ({ data }) => {
				// Prevent circular references and self-selection
				return {
					id: { not_equals: data?.id },
					pageType: { in: ['landing', 'destination'] },
				};
			},
			admin: {
				position: 'sidebar',
				description:
					'Select a parent page to create hierarchy. Leave empty for top-level pages.',
			},
		},
		{
			name: 'navigationOrder',
			type: 'number',
			admin: {
				position: 'sidebar',
				description:
					'Order in navigation menu (lower numbers appear first)',
			},
			defaultValue: 0,
		},
		{
			name: 'hideFromNavigation',
			type: 'checkbox',
			admin: {
				position: 'sidebar',
				description: 'Hide this page from navigation menus',
			},
			defaultValue: false,
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
			name: 'metaDescription',
			type: 'text',
			admin: {
				position: 'sidebar',
				description: 'SEO meta description',
			},
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
