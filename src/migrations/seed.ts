import type { MigrateUpArgs } from '@payloadcms/db-mongodb';
import fs from 'fs';
import path from 'path';

import type { Page } from '../payload-types';
import { DefaultDocumentIDType } from 'payload';

// Home Page
export const home = (): Partial<Page> => ({
	slug: 'home',
	title: 'Welcome to Rise Travel',
	pageType: 'home',
	navigationGroup: 'main',
	navigationOrder: 0,
	hideFromNavigation: false,
	navigationSettings: {
		headerStyle: 'default',
		showInBreadcrumbs: false,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Welcome to Rise Travel' }],
				},
				{
					children: [
						{
							text: 'Discover extraordinary destinations and create unforgettable memories with Rise Travel. From pristine beaches to majestic mountains, we specialize in crafting personalized travel experiences.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Welcome to Rise Travel - your gateway to extraordinary adventures and unforgettable experiences around the world.',
				},
			],
		},
	],
});

// Main Landing Pages
export const destinationsLanding = (): Partial<Page> => ({
	slug: 'destinations',
	title: 'Destinations',
	pageType: 'destination',
	navigationGroup: 'main',
	navigationOrder: 10,
	hideFromNavigation: false,
	navigationSettings: {
		headerStyle: 'destinations',
		navigationIcon: '🗺️',
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Explore Amazing Destinations' }],
				},
				{
					children: [
						{
							text: "Discover the world's most beautiful places. From historic European cities to tropical paradises, explore destinations that inspire and amaze.",
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Explore our carefully curated collection of destinations, each offering unique experiences and unforgettable memories.',
				},
			],
		},
	],
});

export const experiencesLanding = (): Partial<Page> => ({
	slug: 'experiences',
	title: 'Experiences',
	pageType: 'experience',
	navigationGroup: 'main',
	navigationOrder: 20,
	hideFromNavigation: false,
	navigationSettings: {
		headerStyle: 'experiences',
		navigationIcon: '🎯',
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Unforgettable Experiences' }],
				},
				{
					children: [
						{
							text: 'Create memories that last a lifetime with our curated experiences and activities.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Discover a world of unique experiences designed to create lasting memories and connect you with local cultures.',
				},
			],
		},
	],
});

export const contactLanding = (): Partial<Page> => ({
	slug: 'contact',
	title: 'Contact',
	pageType: 'content',
	navigationGroup: 'main',
	navigationOrder: 30,
	hideFromNavigation: false,
	navigationSettings: {
		headerStyle: 'contact',
		navigationIcon: '📞',
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Get in Touch' }],
				},
				{
					children: [
						{
							text: "We're here to help plan your perfect trip. Contact us today to start your adventure.",
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Get in touch with our travel experts to plan your perfect journey. We are here to help make your travel dreams come true.',
				},
			],
		},
	],
});

// Destination Hub Pages
export const franceHub = (parentId: string): Partial<Page> => ({
	slug: 'france',
	title: 'France',
	pageType: 'destination',
	navigationGroup: 'destinations',
	parent: parentId,
	navigationOrder: 10,
	hideFromNavigation: false,
	navigationSettings: {
		customNavigationTitle: 'France',
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Discover France' }],
				},
				{
					children: [
						{
							text: 'From Paris to Provence, experience the best of France. Explore historic cities, taste world-class cuisine, and immerse yourself in rich culture.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Experience the romance and elegance of France. From the iconic Eiffel Tower to lavender fields of Provence, discover what makes France a timeless destination.',
				},
			],
		},
	],
});

export const spainHub = (parentId: string): Partial<Page> => ({
	slug: 'spain',
	title: 'Spain',
	pageType: 'destination',
	navigationGroup: 'destinations',
	parent: parentId,
	navigationOrder: 20,
	hideFromNavigation: false,
	navigationSettings: {
		customNavigationTitle: 'Spain',
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Experience Spain' }],
				},
				{
					children: [
						{
							text: 'Vibrant culture, stunning landscapes, and incredible cuisine await you in Spain.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Immerse yourself in the passionate culture of Spain. From the architectural wonders of Barcelona to the flamenco rhythms of Seville.',
				},
			],
		},
	],
});

export const italyHub = (parentId: string): Partial<Page> => ({
	slug: 'italy',
	title: 'Italy',
	pageType: 'destination',
	navigationGroup: 'destinations',
	parent: parentId,
	navigationOrder: 30,
	hideFromNavigation: false,
	navigationSettings: {
		customNavigationTitle: 'Italy',
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Discover Italy' }],
				},
				{
					children: [
						{
							text: 'Art, history, cuisine, and breathtaking landscapes make Italy an unforgettable destination.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Discover the art, history, and culinary excellence of Italy. From ancient Rome to Renaissance Florence, every corner tells a story.',
				},
			],
		},
	],
});

// French Destination Pages
export const parisPage = (parentId: string): Partial<Page> => ({
	slug: 'paris',
	title: 'Paris',
	pageType: 'content',
	navigationGroup: 'destinations',
	parent: parentId,
	navigationOrder: 10,
	hideFromNavigation: false,
	navigationSettings: {
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Paris - The City of Light' }],
				},
				{
					children: [
						{
							text: 'Paris, the capital of France, is globally renowned for its art, fashion, gastronomy, and culture. From the iconic Eiffel Tower to world-class museums like the Louvre.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Experience the magic of Paris with its world-famous landmarks, exceptional museums, charming cafés, and romantic atmosphere that captivates visitors from around the globe.',
				},
			],
		},
	],
});

export const provencePage = (parentId: string): Partial<Page> => ({
	slug: 'provence',
	title: 'Provence',
	pageType: 'content',
	navigationGroup: 'destinations',
	parent: parentId,
	navigationOrder: 20,
	hideFromNavigation: false,
	navigationSettings: {
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [
						{ text: 'Provence - Lavender Fields & Roman History' },
					],
				},
				{
					children: [
						{
							text: 'Provence offers stunning lavender fields, charming villages, excellent wines, and rich Roman heritage.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Escape to the enchanting region of Provence, where purple lavender fields meet ancient Roman ruins and charming villages offer authentic French countryside experiences.',
				},
			],
		},
	],
});

// Experience Hub Pages
export const culturalExperiencesHub = (parentId: string): Partial<Page> => ({
	slug: 'cultural-experiences',
	title: 'Cultural Experiences',
	pageType: 'experience',
	navigationGroup: 'experiences',
	parent: parentId,
	navigationOrder: 10,
	hideFromNavigation: false,
	navigationSettings: {
		customNavigationTitle: 'Cultural',
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Cultural Experiences' }],
				},
				{
					children: [
						{
							text: 'Immerse yourself in local culture with authentic experiences that connect you with traditions.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Dive deep into local traditions and customs through immersive cultural experiences that offer genuine connections with communities around the world.',
				},
			],
		},
	],
});

export const cookingClassesPage = (parentId: string): Partial<Page> => ({
	slug: 'cooking-classes',
	title: 'Cooking Classes',
	pageType: 'content',
	navigationGroup: 'experiences',
	parent: parentId,
	navigationOrder: 10,
	hideFromNavigation: false,
	navigationSettings: {
		showInBreadcrumbs: true,
	},
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [{ text: 'Cooking Classes' }],
				},
				{
					children: [
						{
							text: 'Learn from local chefs and master traditional recipes. From pasta making in Italy to paella cooking in Spain.',
						},
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'Master the art of cooking with hands-on classes led by expert local chefs. Learn authentic recipes and techniques passed down through generations.',
				},
			],
		},
	],
});

// Showcase Landing Page
export const showcaseLanding = (
	mediaMap: Record<string, string>,
): Partial<Page> => ({
	slug: 'showcase',
	title: 'Showcase Landing',
	pageType: 'content',
	navigationGroup: 'main',
	navigationOrder: 5,
	hideFromNavigation: false,
	navigationSettings: {
		headerStyle: 'default',
		showInBreadcrumbs: true,
	},
	layout: [
		// Hero Section
		{
			blockType: 'hero',
			title: 'Lorem ipsum dolor sit amet consectetur. Dictum lacus enim at leo aliquam hendrerit.',
			subtitle:
				'Discover extraordinary destinations and create unforgettable travel experiences.',
			height: 'large',
			overlay: 'dark',
			backgroundImage: mediaMap['600.jpg'] || null,
			buttons: [
				{
					label: 'Get Started',
					style: 'primary',
					url: '/contact',
				},
				{
					label: 'Learn More',
					style: 'secondary',
					url: '/about',
				},
			],
		},
		// First Card Grid - 2x2
		{
			blockType: 'cards',
			title: 'Featured Destinations',
			description: 'Explore our most popular travel destinations',
			layout: 'grid',
			columns: '2',
			cards: [
				{
					title: 'Paris, France',
					description:
						'The city of lights awaits with its romantic atmosphere and iconic landmarks.',
					image: mediaMap['200-1.jpg'] || null,
					link: {
						url: '/destinations/france/paris',
						label: 'Explore Paris',
					},
				},
				{
					title: 'Tokyo, Japan',
					description:
						'Experience the perfect blend of ancient traditions and modern innovation.',
					image: mediaMap['200-2.jpg'] || null,
					link: {
						url: '/destinations/japan/tokyo',
						label: 'Discover Tokyo',
					},
				},
				{
					title: 'New York, USA',
					description:
						'The city that never sleeps offers endless possibilities and excitement.',
					image: mediaMap['200-3.jpg'] || null,
					link: {
						url: '/destinations/usa/new-york',
						label: 'Visit NYC',
					},
				},
				{
					title: 'Rome, Italy',
					description:
						'Walk through history in the eternal city filled with ancient wonders.',
					image: mediaMap['200-4.jpg'] || null,
					link: {
						url: '/destinations/italy/rome',
						label: 'Explore Rome',
					},
				},
			],
		},
		// Second Card Grid - 2x2
		{
			blockType: 'cards',
			title: 'Popular Experiences',
			description: 'Curated experiences for the modern traveler',
			layout: 'grid',
			columns: '2',
			cards: [
				{
					title: 'Cultural Tours',
					description:
						'Immerse yourself in local cultures and traditions with our expert guides.',
					image: mediaMap['200-5.jpg'] || null,
					link: {
						url: '/experiences/cultural-tours',
						label: 'Book Tour',
					},
				},
				{
					title: 'Adventure Activities',
					description:
						'Thrill-seeking adventures for those who love adrenaline-pumping experiences.',
					image: mediaMap['200-6.jpg'] || null,
					link: {
						url: '/experiences/adventure',
						label: 'Get Adventure',
					},
				},
				{
					title: 'Culinary Experiences',
					description:
						'Taste the world through authentic local cuisines and cooking classes.',
					image: mediaMap['200-7.jpg'] || null,
					link: {
						url: '/experiences/culinary',
						label: 'Taste More',
					},
				},
				{
					title: 'Luxury Retreats',
					description:
						'Relax and unwind in our carefully selected luxury accommodations.',
					image: mediaMap['200-8.jpg'] || null,
					link: {
						url: '/experiences/luxury',
						label: 'Book Retreat',
					},
				},
			],
		},
		// Full Width Banner Section
		{
			blockType: 'fullWidthContent',
			title: 'Ready for Your Next Adventure?',
			backgroundColor: 'light',
			maxWidth: 'medium',
			content: [
				{
					children: [
						{
							text: 'Join thousands of travelers who have discovered amazing destinations with us. Our expert team is ready to help you plan your perfect getaway.',
						},
					],
				},
				{
					children: [
						{
							text: 'Contact us today to start planning your next unforgettable journey.',
						},
					],
				},
			],
		},
		// Third Card Grid - 2x2
		{
			blockType: 'cards',
			title: 'Travel Packages',
			description:
				'All-inclusive packages designed for every type of traveler',
			layout: 'grid',
			columns: '2',
			cards: [
				{
					title: 'Honeymoon Special',
					description:
						'Romantic getaways perfect for couples celebrating their love.',
					image: mediaMap['200-9.jpg'] || null,
					link: {
						url: '/packages/honeymoon',
						label: 'View Packages',
					},
				},
				{
					title: 'Family Adventure',
					description:
						'Fun-filled trips designed with families and children in mind.',
					image: mediaMap['300-1.jpg'] || null,
					link: {
						url: '/packages/family',
						label: 'Plan Family Trip',
					},
				},
				{
					title: 'Solo Explorer',
					description:
						'Safe and exciting solo travel experiences for independent adventurers.',
					image: mediaMap['300-2.jpg'] || null,
					link: {
						url: '/packages/solo',
						label: 'Solo Travel',
					},
				},
				{
					title: 'Group Tours',
					description:
						'Join like-minded travelers on our carefully planned group expeditions.',
					image: mediaMap['300-3.jpg'] || null,
					link: {
						url: '/packages/groups',
						label: 'Join Group',
					},
				},
			],
		},
		// Text + Image Section (Image Left)
		{
			blockType: 'textImageSection',
			title: 'Why Choose Rise Travel?',
			imagePosition: 'left',
			backgroundColor: 'white',
			size: 'medium',
			image: mediaMap['300-4.jpg'],
			content: [
				{
					children: [
						{
							text: 'With over 10 years of experience in the travel industry, we have built lasting relationships with local partners worldwide. Our team of travel experts ensures every detail of your journey is perfectly planned.',
						},
					],
				},
				{
					children: [
						{
							text: 'From the moment you contact us until you return home, we provide 24/7 support to make your travel experience seamless and memorable.',
						},
					],
				},
			],
		},
		// Text + Image Section (Image Right)
		{
			blockType: 'textImageSection',
			title: 'Sustainable Travel Commitment',
			imagePosition: 'right',
			backgroundColor: 'light',
			size: 'medium',
			image: mediaMap['300-5.jpg'],
			content: [
				{
					children: [
						{
							text: 'We believe in responsible tourism that benefits local communities and preserves the environment. Our carefully selected partners share our commitment to sustainable travel practices.',
						},
					],
				},
				{
					children: [
						{
							text: 'Every trip you book with us contributes to local conservation efforts and community development programs in your destination.',
						},
					],
				},
			],
		},
		// Testimonials Section
		{
			blockType: 'testimonials',
			backgroundColor: 'dark',
			layout: 'grid',
			columns: '3',
			testimonials: [
				{
					name: 'Chineze Uchechey',
					role: 'Design partner',
				},
				{
					name: 'Chineze Uchechey',
					role: 'Design partner',
				},
				{
					name: 'Chineze Uchechey',
					role: 'Design partner',
				},
			],
		},
	],
});

// Helper function to upload media files (only if they don't exist in storage)
async function uploadMediaFiles(payload: any): Promise<Record<string, string>> {
	const mediaMap: Record<string, string> = {};

	// List of media files to upload
	const mediaFiles = [
		'200-1.jpg',
		'200-2.jpg',
		'200-3.jpg',
		'200-4.jpg',
		'200-5.jpg',
		'200-6.jpg',
		'200-7.jpg',
		'200-8.jpg',
		'200-9.jpg',
		'200.jpg',
		'300-1.jpg',
		'300-2.jpg',
		'300-3.jpg',
		'300-4.jpg',
		'300-5.jpg',
		'600.jpg',
	];

	console.log('📸 Checking and uploading media files...');

	for (const filename of mediaFiles) {
		try {
			// Check if media with this filename already exists in database
			const existingMedia = await payload.find({
				collection: 'media',
				where: {
					filename: {
						equals: filename,
					},
				},
				limit: 1,
			});

			if (existingMedia.docs.length > 0) {
				// Media record exists in database, use existing ID
				mediaMap[filename] = existingMedia.docs[0].id;
				console.log(
					`♻️ Using existing ${filename} with ID: ${existingMedia.docs[0].id}`,
				);
			} else {
				// No database record exists, check if file exists in storage
				const storageDir = path.join(process.cwd(), 'media');
				const filePath = path.join(storageDir, filename);

				if (fs.existsSync(filePath)) {
					// File exists, create database record with file data
					console.log(
						`📁 File exists, creating database record for ${filename}`,
					);
					const fileBuffer = fs.readFileSync(filePath);
					const media = await payload.create({
						collection: 'media',
						data: {
							alt: `${filename.replace(/\.(jpg|jpeg|png)$/i, '').replace(/[-_]/g, ' ')} image`,
						},
						file: {
							data: fileBuffer,
							mimetype: 'image/jpeg',
							name: filename,
							size: fileBuffer.length,
						},
					});

					mediaMap[filename] = media.id;
					console.log(
						`✅ Created database record for ${filename} with ID: ${media.id}`,
					);
				} else {
					console.log(`⚠️ Media file not found: ${filename}`);
				}
			}
		} catch (error) {
			console.error(`❌ Error processing ${filename}:`, error);
		}
	}

	return mediaMap;
}

export async function up({ payload }: MigrateUpArgs): Promise<void> {
	// Create admin user
	await payload.create({
		collection: 'users',
		data: {
			email: 'admin@rise-travel.com',
			password: 'admin123',
		},
	});

	// Upload media files first
	const mediaMap = await uploadMediaFiles(payload);

	console.log('📄 Creating page hierarchy...');

	// Create main pages
	const homePageResult = await payload.create({
		collection: 'pages',
		data: home() as any,
	});

	const destinationsResult = await payload.create({
		collection: 'pages',
		data: destinationsLanding() as any,
	});

	const experiencesResult = await payload.create({
		collection: 'pages',
		data: experiencesLanding() as any,
	});

	const contactResult = await payload.create({
		collection: 'pages',
		data: contactLanding() as any,
	});

	// Create destination hubs
	const franceResult = await payload.create({
		collection: 'pages',
		data: franceHub(destinationsResult.id) as any,
	});

	const spainResult = await payload.create({
		collection: 'pages',
		data: spainHub(destinationsResult.id) as any,
	});

	const italyResult = await payload.create({
		collection: 'pages',
		data: italyHub(destinationsResult.id) as any,
	});

	// Create French destinations
	await payload.create({
		collection: 'pages',
		data: parisPage(franceResult.id) as any,
	});

	await payload.create({
		collection: 'pages',
		data: provencePage(franceResult.id) as any,
	});

	// Create experience hubs
	const culturalExpResult = await payload.create({
		collection: 'pages',
		data: culturalExperiencesHub(experiencesResult.id) as any,
	});

	// Create individual experiences
	await payload.create({
		collection: 'pages',
		data: cookingClassesPage(culturalExpResult.id) as any,
	});

	// Create showcase landing page
	await payload.create({
		collection: 'pages',
		data: showcaseLanding(mediaMap) as any,
	});

	console.log('✅ Page hierarchy created successfully!');

	// Update navigation settings
	await payload.updateGlobal({
		slug: 'main-menu',
		data: {
			autoPopulate: true,
			includePageTypes: [
				'landing',
				'destination',
				'experience',
				'content',
			],
			maxDepth: 4,
			displaySettings: {
				showPageTypes: false,
				showNavigationOrder: false,
				highlightActiveParents: true,
			},
		},
	});

	// Update footer settings
	await payload.updateGlobal({
		slug: 'footer',
		data: {
			companyInfo: {
				name: 'Rise Travel',
				description: [
					{
						children: [
							{
								text: 'Discover extraordinary destinations and create unforgettable memories with Rise Travel. We specialize in crafting personalized travel experiences that inspire and delight.',
							},
						],
					},
				],
			},
			contactInfo: {
				email: 'hello@rise-travel.com',
				phone: '+1 (555) 987-6543',
				address: '123 Adventure Lane\nTravel City, TC 12345',
			},
			footerLinks: [
				{
					title: 'Destinations',
					links: [
						{
							link: {
								type: 'reference',
								label: 'France',
								reference: {
									relationTo: 'pages',
									value: franceResult.id,
								},
							},
						},
						{
							link: {
								type: 'reference',
								label: 'Spain',
								reference: {
									relationTo: 'pages',
									value: spainResult.id,
								},
							},
						},
						{
							link: {
								type: 'reference',
								label: 'Italy',
								reference: {
									relationTo: 'pages',
									value: italyResult.id,
								},
							},
						},
					],
				},
				{
					title: 'Company',
					links: [
						{
							link: {
								type: 'custom',
								label: 'About Us',
								url: '/about-us',
							},
						},
						{
							link: {
								type: 'reference',
								label: 'Contact',
								reference: {
									relationTo: 'pages',
									value: contactResult.id,
								},
							},
						},
					],
				},
			],
			socialMedia: [
				{
					platform: 'instagram',
					url: 'https://instagram.com/risetravel',
				},
				{
					platform: 'facebook',
					url: 'https://facebook.com/risetravel',
				},
				{
					platform: 'twitter',
					url: 'https://twitter.com/risetravel',
				},
			],
			bottomSection: {
				copyrightText: [
					{
						children: [
							{
								text: `© ${new Date().getFullYear()} Rise Travel. All rights reserved.`,
							},
						],
					},
				],
			},
		},
	});

	console.log('🎉 Seed data creation completed successfully!');
}
