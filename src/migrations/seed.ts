import type { MigrateUpArgs } from '@payloadcms/db-mongodb';
import fs from 'fs';
import path from 'path';

import type { Page } from '../payload-types';
import { DefaultDocumentIDType } from 'payload';

export const home = (id: DefaultDocumentIDType): Partial<Page> => ({
	slug: 'home',
	pageType: 'landing',
	navigationOrder: 0,
	hideFromNavigation: false,
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [
						{
							text: 'Payload Live Preview Example',
						},
					],
				},
				{
					children: [
						{ text: 'This is a ' },
						{
							type: 'link',
							children: [{ text: 'Next.js' }],
							linkType: 'custom',
							newTab: true,
							url: 'https://nextjs.org',
						},
						{ text: " app made explicitly for Payload's " },
						{
							type: 'link',
							children: [{ text: 'Live Preview Example' }],
							linkType: 'custom',
							newTab: true,
							url: 'https://github.com/payloadcms/payload/tree/master/examples/live-preview/payload',
						},
						{ text: '. With ' },
						{
							type: 'link',
							children: [{ text: 'Live Preview' }],
							newTab: true,
							url: 'https://payloadcms.com/docs/live-preview/overview',
						},
						{
							text: ' you can edit this page in the admin panel and see the changes reflected here in real time.',
						},
						...(id
							? [
									{
										text: ' To get started, visit ',
									},
									{
										type: 'link',
										children: [{ text: 'this page' }],
										linkType: 'custom',
										newTab: true,
										url: `/admin/collections/pages/${id}/preview`,
									},
									{ text: '.' },
								]
							: []),
					],
				},
			],
		},
	],
	richText: [
		{
			children: [
				{
					text: 'This content appears below the flexible layout blocks. You can combine traditional rich text with the new block system for maximum flexibility.',
				},
			],
		},
	],
	title: 'Home',
});

export const examplePage: Partial<Page> = {
	slug: 'example-page',
	pageType: 'content',
	navigationOrder: 20,
	hideFromNavigation: false,
	layout: [
		{
			blockType: 'content',
			columns: 'single',
			content: [
				{
					type: 'h1',
					children: [
						{
							text: 'Example Page',
						},
					],
				},
				{
					children: [
						{
							text: 'This is an example page. You can edit this page in the Admin panel and see the changes reflected here in real time.',
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
					text: 'This is additional content below the blocks.',
				},
			],
		},
	],
	title: 'Example Page',
};

export const demoPage = (
	imageId?: string,
	secondImageId?: string,
): Partial<Page> => ({
	slug: 'demo-page',
	pageType: 'destination',
	navigationOrder: 10,
	hideFromNavigation: false,
	layout: [
		{
			blockType: 'banner',
			title: 'Page de Démonstration',
			subtitle: 'Découvrez nos nouveaux composants en action',
			content: [
				{
					children: [
						{
							text: 'Bienvenue sur cette page de démonstration qui utilise nos nouveaux composants pour créer une mise en page moderne et professionnelle.',
						},
					],
				},
			],
			backgroundColor: 'light',
			textAlign: 'left',
			size: 'medium',
		},
		{
			blockType: 'textImageSection',
			title: 'Première Section',
			content: [
				{
					children: [
						{
							text: "Cette section démontre l'utilisation du composant TextImageSection avec une image positionnée à droite. Le contenu peut être riche et contenir plusieurs paragraphes.",
						},
					],
				},
				{
					children: [
						{
							text: "Les sections s'adaptent automatiquement aux différentes tailles d'écran pour une expérience utilisateur optimale sur tous les appareils.",
						},
					],
				},
			],
			image: imageId || '',
			imagePosition: 'right',
			backgroundColor: 'white',
			size: 'medium',
		},
		{
			blockType: 'textImageSection',
			title: 'Deuxième Section',
			content: [
				{
					children: [
						{
							text: "Ici, l'image est positionnée à gauche pour créer une variation visuelle intéressante. Cette alternance permet un design dynamique et équilibré.",
						},
					],
				},
				{
					children: [
						{
							text: 'Chaque section peut avoir sa propre couleur de fond et ses propres paramètres de disposition.',
						},
					],
				},
			],
			image: secondImageId || imageId || '',
			imagePosition: 'left',
			backgroundColor: 'light',
			size: 'medium',
		},
		{
			blockType: 'fullWidthContent',
			title: 'Section de Contenu Étendu',
			content: [
				{
					children: [
						{
							text: 'Cette section utilise le composant FullWidthContent qui est parfait pour afficher de grandes quantités de contenu de manière lisible et attrayante.',
						},
					],
				},
				{
					children: [
						{
							text: 'Fonctionnalités principales :',
						},
					],
				},
				{
					type: 'ul',
					children: [
						{
							type: 'li',
							children: [
								{
									text: 'Largeur de contenu personnalisable',
								},
							],
						},
						{
							type: 'li',
							children: [
								{
									text: "Options de couleur d'arrière-plan variées",
								},
							],
						},
						{
							type: 'li',
							children: [
								{
									text: "Possibilité d'ajouter des motifs décoratifs",
								},
							],
						},
						{
							type: 'li',
							children: [
								{
									text: 'Optimisé pour la lecture sur tous les appareils',
								},
							],
						},
					],
				},
				{
					children: [
						{
							text: "Ces composants vous permettent de créer des pages web modernes et professionnelles rapidement et facilement grâce à l'interface intuitive de Payload CMS.",
						},
					],
				},
			],
			backgroundColor: 'white',
			hasPattern: false,
			maxWidth: 'medium',
		},
	],
	richText: [
		{
			children: [
				{
					text: "Cette page démontre l'utilisation des nouveaux composants Banner, TextImageSection et FullWidthContent. Elle reproduit la structure de votre maquette.",
				},
			],
		},
	],
	title: 'Page de Démonstration',
});

export async function up({ payload }: MigrateUpArgs): Promise<void> {
	await payload.create({
		collection: 'users',
		data: {
			email: 'demo@payloadcms.com',
			password: 'demo',
		},
	});

	// Créer les images depuis le dossier media
	let defaultImageID = '';
	let secondImageID = '';

	try {
		const mediaDir = path.join(process.cwd(), 'media');
		const imageFiles = [
			{ filename: '600.jpg', alt: 'Image de démonstration 600px' },
			{ filename: '300.jpg', alt: 'Image de démonstration 300px' },
			{ filename: '200.jpg', alt: 'Image de démonstration 200px' },
		];

		console.log('🖼️  Ajout des images depuis le dossier media...');

		for (const imageFile of imageFiles) {
			const imagePath = path.join(mediaDir, imageFile.filename);

			if (fs.existsSync(imagePath)) {
				try {
					const fileBuffer = fs.readFileSync(imagePath);

					const uploadedImage = await payload.create({
						collection: 'media',
						data: {
							alt: imageFile.alt,
						},
						file: {
							data: fileBuffer,
							mimetype: 'image/jpeg',
							name: imageFile.filename,
							size: fileBuffer.length,
						},
					});

					console.log(
						`✅ Image ${imageFile.filename} ajoutée avec ID: ${uploadedImage.id}`,
					);

					// Utiliser les deux premières images pour la démo
					if (!defaultImageID) {
						defaultImageID = uploadedImage.id;
					} else if (!secondImageID) {
						secondImageID = uploadedImage.id;
					}
				} catch (uploadError) {
					console.error(
						`❌ Erreur lors de l'upload de ${imageFile.filename}:`,
						uploadError,
					);
				}
			} else {
				console.log(
					`⚠️  Image ${imageFile.filename} non trouvée dans ${mediaDir}`,
				);
			}
		}
	} catch (error) {
		console.error('❌ Erreur lors du traitement des images:', error);
	}

	const { id: homePageID } = await payload.create({
		collection: 'pages',
		data: home('') as any,
	});

	const { id: examplePageID } = await payload.create({
		collection: 'pages',
		data: examplePage as any,
	});

	const { id: demoPageID } = await payload.create({
		collection: 'pages',
		data: demoPage(defaultImageID, secondImageID) as any,
	});

	await payload.updateGlobal({
		slug: 'main-menu',
		data: {
			autoPopulate: true,
			includePageTypes: ['landing', 'destination', 'content'],
			maxDepth: 3,
			displaySettings: {
				showPageTypes: false,
				showNavigationOrder: false,
				highlightActiveParents: true,
			},
		},
	});

	// Initialiser le footer global
	await payload.updateGlobal({
		slug: 'footer',
		data: {
			companyInfo: {
				name: 'Your Company',
				description: [
					{
						children: [
							{
								text: 'Building amazing web experiences with modern technology. We specialize in creating beautiful, functional websites that engage your audience.',
							},
						],
					},
				],
			},
			contactInfo: {
				email: 'contact@yourcompany.com',
				phone: '+1 (555) 123-4567',
				address: '123 Main Street\nYour City, YC 12345',
			},
			footerLinks: [
				{
					title: 'Company',
					links: [
						{
							link: {
								type: 'reference',
								label: 'About Us',
								reference: {
									relationTo: 'pages',
									value: homePageID,
								},
							},
						},
						{
							link: {
								type: 'custom',
								label: 'Careers',
								url: '/careers',
							},
						},
						{
							link: {
								type: 'custom',
								label: 'Contact',
								url: '/contact',
							},
						},
					],
				},
				{
					title: 'Services',
					links: [
						{
							link: {
								type: 'custom',
								label: 'Web Development',
								url: '/services/web-development',
							},
						},
						{
							link: {
								type: 'custom',
								label: 'Design',
								url: '/services/design',
							},
						},
						{
							link: {
								type: 'custom',
								label: 'Consulting',
								url: '/services/consulting',
							},
						},
					],
				},
			],
			socialMedia: [
				{
					platform: 'facebook',
					url: 'https://facebook.com/yourcompany',
				},
				{
					platform: 'twitter',
					url: 'https://twitter.com/yourcompany',
				},
				{
					platform: 'linkedin',
					url: 'https://linkedin.com/company/yourcompany',
				},
				{
					platform: 'instagram',
					url: 'https://instagram.com/yourcompany',
				},
			],
			bottomSection: {
				copyrightText: [
					{
						children: [
							{
								text: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
							},
						],
					},
				],
				legalLinks: [
					{
						link: {
							type: 'custom',
							label: 'Privacy Policy',
							url: '/privacy',
						},
					},
					{
						link: {
							type: 'custom',
							label: 'Terms of Service',
							url: '/terms',
						},
					},
					{
						link: {
							type: 'custom',
							label: 'Cookie Policy',
							url: '/cookies',
						},
					},
				],
			},
			newsletter: {
				enabled: true,
				title: 'Stay Updated',
				description:
					'Subscribe to our newsletter for the latest updates and news.',
				placeholder: 'Enter your email address',
			},
		},
	});
}
