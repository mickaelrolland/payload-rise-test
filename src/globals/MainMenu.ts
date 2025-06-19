import type { GlobalConfig } from 'payload';

import link from '../fields/link';

export const MainMenu: GlobalConfig = {
	slug: 'main-menu',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'autoPopulate',
			type: 'checkbox',
			defaultValue: true,
			admin: {
				description:
					'Automatically populate navigation from page hierarchy',
			},
		},
		{
			name: 'includePageTypes',
			type: 'select',
			hasMany: true,
			options: [
				{ label: 'Landing Pages', value: 'landing' },
				{ label: 'Destination Hubs', value: 'destination' },
				{ label: 'Content Pages', value: 'content' },
				{ label: 'Experience Pages', value: 'experience' },
			],
			defaultValue: ['landing', 'destination'],
			admin: {
				condition: (data) => data.autoPopulate,
				description:
					'Which page types to include in auto-populated navigation',
			},
		},
		{
			name: 'maxDepth',
			type: 'number',
			defaultValue: 3,
			min: 1,
			max: 5,
			admin: {
				condition: (data) => data.autoPopulate,
				description: 'Maximum hierarchy depth to display (1-5 levels)',
			},
		},
		{
			name: 'customNavItems',
			type: 'array',
			fields: [
				{
					name: 'navigationGroup',
					type: 'group',
					fields: [
						{
							name: 'groupTitle',
							type: 'text',
							admin: {
								description:
									'Optional group title for organizing navigation items',
							},
						},
						link({
							appearances: false,
						}),
						{
							name: 'children',
							type: 'array',
							fields: [
								link({
									appearances: false,
								}),
							],
							maxRows: 10,
							admin: {
								description:
									'Sub-navigation items under this main item',
							},
						},
					],
				},
			],
			maxRows: 8,
			admin: {
				condition: (data) => !data.autoPopulate,
				description:
					'Manual navigation configuration (used when auto-populate is disabled)',
			},
		},
		{
			name: 'displaySettings',
			type: 'group',
			fields: [
				{
					name: 'showPageTypes',
					type: 'checkbox',
					defaultValue: false,
					admin: {
						description:
							'Display page type indicators in navigation',
					},
				},
				{
					name: 'showNavigationOrder',
					type: 'checkbox',
					defaultValue: false,
					admin: {
						description: 'Display navigation order numbers',
					},
				},
				{
					name: 'highlightActiveParents',
					type: 'checkbox',
					defaultValue: true,
					admin: {
						description:
							'Highlight parent pages when child pages are active',
					},
				},
			],
		},
	],
	hooks: {
		afterChange: [
			async ({ doc, req }) => {
				// Clear any navigation cache when main menu is updated
				// This would be where you'd implement cache invalidation
				console.log(
					'Main menu updated, navigation cache should be cleared',
				);
			},
		],
	},
};
