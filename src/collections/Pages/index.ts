import type { CollectionConfig } from 'payload';

import {
	Banner,
	Card,
	Content,
	FullWidthContent,
	Gallery,
	Hero,
	Testimonials,
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
				{ label: 'Home Page', value: 'home' },
				{ label: 'Landing Page (Destinations)', value: 'destination' },
				{ label: 'Landing Page (Experiences)', value: 'experience' },
				{ label: 'Landing Page (Contact)', value: 'contact' },
				{ label: 'Destination Hub', value: 'destination-hub' },
				{ label: 'Experience Hub', value: 'experience-hub' },
				{ label: 'Content Page', value: 'content' },
				{ label: 'Gallery Page', value: 'gallery' },
				{ label: 'Service Page', value: 'service' },
				{ label: 'Location Page', value: 'location' },
			],
			required: true,
			admin: {
				position: 'sidebar',
				description:
					'Select the type of page to organize your navigation hierarchy',
			},
		},
		{
			name: 'navigationGroup',
			type: 'select',
			options: [
				{ label: 'Main Navigation', value: 'main' },
				{ label: 'Destinations', value: 'destinations' },
				{ label: 'Experiences', value: 'experiences' },
				{ label: 'Contact', value: 'contact' },
				{ label: 'Footer Only', value: 'footer' },
				{ label: 'Hidden', value: 'hidden' },
			],
			defaultValue: 'main',
			admin: {
				position: 'sidebar',
				description: 'Which navigation group this page belongs to',
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
					pageType: {
						in: [
							'home',
							'destination',
							'experience',
							'contact',
							'destination-hub',
							'experience-hub',
						],
					},
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
			name: 'navigationSettings',
			type: 'group',
			admin: {
				position: 'sidebar',
			},
			fields: [
				{
					name: 'customNavigationTitle',
					type: 'text',
					admin: {
						description:
							'Override title shown in navigation (leave empty to use page title)',
					},
				},
				{
					name: 'showInBreadcrumbs',
					type: 'checkbox',
					defaultValue: true,
					admin: {
						description: 'Show this page in breadcrumb navigation',
					},
				},
				{
					name: 'headerStyle',
					type: 'select',
					options: [
						{ label: 'Default Header', value: 'default' },
						{ label: 'Destinations Header', value: 'destinations' },
						{ label: 'Experiences Header', value: 'experiences' },
						{ label: 'Contact Header', value: 'contact' },
						{ label: 'Minimal Header', value: 'minimal' },
					],
					defaultValue: 'default',
					admin: {
						description: 'Choose the header style for this page',
					},
				},
				{
					name: 'navigationIcon',
					type: 'text',
					admin: {
						description:
							'Optional icon/emoji for navigation display',
					},
				},
			],
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
				Testimonials,
				Video,
			],
			required: true,
		},
		richText({ required: false }),
	],
	versions: {
		drafts: {
			autosave: {
				interval: 375,
			},
		},
	},
};
