import type { GlobalConfig } from 'payload';

import link from '../fields/link';
import richText from '../fields/richText';

export const Footer: GlobalConfig = {
	slug: 'footer',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'companyInfo',
			type: 'group',
			label: 'Company Information',
			fields: [
				{
					name: 'name',
					type: 'text',
					label: 'Company Name',
					required: true,
				},
				{
					name: 'logo',
					type: 'upload',
					relationTo: 'media',
					label: 'Company Logo',
				},
				richText({
					name: 'description',
					label: 'Company Description',
				}),
			],
		},
		{
			name: 'contactInfo',
			type: 'group',
			label: 'Contact Information',
			fields: [
				{
					name: 'email',
					type: 'email',
					label: 'Email Address',
				},
				{
					name: 'phone',
					type: 'text',
					label: 'Phone Number',
				},
				{
					name: 'address',
					type: 'textarea',
					label: 'Physical Address',
				},
			],
		},
		{
			name: 'footerLinks',
			type: 'array',
			label: 'Footer Link Sections',
			fields: [
				{
					name: 'title',
					type: 'text',
					label: 'Section Title',
					required: true,
				},
				{
					name: 'links',
					type: 'array',
					label: 'Links',
					fields: [
						link({
							appearances: false,
						}),
					],
					maxRows: 10,
				},
			],
			maxRows: 4,
		},
		{
			name: 'socialMedia',
			type: 'array',
			label: 'Social Media Links',
			fields: [
				{
					name: 'platform',
					type: 'select',
					label: 'Platform',
					options: [
						{ label: 'Facebook', value: 'facebook' },
						{ label: 'Twitter', value: 'twitter' },
						{ label: 'Instagram', value: 'instagram' },
						{ label: 'LinkedIn', value: 'linkedin' },
						{ label: 'YouTube', value: 'youtube' },
						{ label: 'TikTok', value: 'tiktok' },
						{ label: 'Other', value: 'other' },
					],
					required: true,
				},
				{
					name: 'customPlatform',
					type: 'text',
					label: 'Custom Platform Name',
					admin: {
						condition: (data) => data.platform === 'other',
					},
				},
				{
					name: 'url',
					type: 'text',
					label: 'Profile URL',
					required: true,
					validate: (value: string) => {
						if (!value) return true;
						try {
							new URL(value);
							return true;
						} catch {
							return 'Please enter a valid URL';
						}
					},
				},
			],
			maxRows: 8,
		},
		{
			name: 'bottomSection',
			type: 'group',
			label: 'Bottom Section',
			fields: [
				richText({
					name: 'copyrightText',
					label: 'Copyright Text',
				}),
				{
					name: 'legalLinks',
					type: 'array',
					label: 'Legal Links',
					fields: [
						link({
							appearances: false,
						}),
					],
					maxRows: 5,
				},
			],
		},
		{
			name: 'newsletter',
			type: 'group',
			label: 'Newsletter Signup',
			fields: [
				{
					name: 'enabled',
					type: 'checkbox',
					label: 'Enable Newsletter Signup',
					defaultValue: false,
				},
				{
					name: 'title',
					type: 'text',
					label: 'Newsletter Title',
					admin: {
						condition: (data) => data.newsletter?.enabled,
					},
				},
				{
					name: 'description',
					type: 'textarea',
					label: 'Newsletter Description',
					admin: {
						condition: (data) => data.newsletter?.enabled,
					},
				},
				{
					name: 'placeholder',
					type: 'text',
					label: 'Email Placeholder',
					defaultValue: 'Enter your email address',
					admin: {
						condition: (data) => data.newsletter?.enabled,
					},
				},
			],
		},
	],
};
