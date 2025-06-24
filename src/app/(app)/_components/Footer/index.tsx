'use client';

import React from 'react';
import Link from 'next/link';

import { Gutter } from '../Gutter';
import classes from './index.module.scss';

export const Footer: React.FC = () => {
	// Main navigation items for the footer
	const mainNavItems = [
		{ id: 'destinations', title: 'Destinations', url: '/destinations' },
		{ id: 'hotels', title: 'Hôtels', url: '/hotels' },
		{ id: 'private-homes', title: 'Private Homes', url: '/private-homes' },
		{ id: 'gastronomie', title: 'Gastronomie', url: '/gastronomie' },
		{ id: 'bien-etre', title: 'Bien-être', url: '/bien-etre' },
		{ id: 'experiences', title: 'Expériences', url: '/experiences' },
		{ id: 'travel-agents', title: 'Travel agents', url: '/travel-agents' },
		{ id: 'carrieres', title: 'Carrières', url: '/carrieres' },
		{ id: 'presse', title: 'Presse', url: '/presse' },
	];

	// Secondary links
	const secondaryLinks = [
		{ id: 'bons-cadeaux', title: 'Bons cadeaux', url: '/bons-cadeaux' },
		{ id: 'cgv', title: 'CGV', url: '/cgv' },
		{
			id: 'confidentialite',
			title: 'Politique de confidentialité',
			url: '/politique-de-confidentialite',
		},
		{
			id: 'mentions-legales',
			title: 'Mentions Légales',
			url: '/mentions-legales',
		},
		{ id: 'cookies', title: 'Cookies', url: '/cookies' },
		{ id: 'contact', title: 'Contact', url: '/contact' },
		{ id: 'facebook', title: 'Facebook', url: 'https://facebook.com' },
		{ id: 'linkedin', title: 'Linkedin', url: 'https://linkedin.com' },
		{ id: 'instagram', title: 'Instagram', url: 'https://instagram.com' },
	];

	// Location information
	const locations = [
		{
			id: 'paris',
			name: 'Paris',
			phone: '800 8300500',
			email: 'sales@resiliavons.com',
		},
		{
			id: 'ramatuelle',
			name: 'Ramatuelle',
			phone: '+33 1552886516',
			email: 'contact@resiliavons.com',
		},
		{
			id: 'destination-03',
			name: 'Destination 03',
			phone: '+254 735047674',
			email: 'inafraica@resiliavons.com',
		},
	];

	return (
		<footer className={classes.footer}>
			<Gutter>
				<div className={classes.container}>
					{/* Main Navigation Section */}
					<div className={classes.mainNavSection}>
						<nav className={classes.mainNav}>
							<ul className={classes.mainNavList}>
								{mainNavItems.map((item) => (
									<li
										key={item.id}
										className={classes.mainNavItem}
									>
										<Link
											href={item.url}
											className={classes.mainNavLink}
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className={classes.boutique}>
							<Link
								href="/boutique"
								className={classes.boutiqueLink}
							>
								<span className={classes.boutiqueIcon}>🛍️</span>
								<span className={classes.boutiqueText}>
									La boutique
								</span>
							</Link>
						</div>
					</div>

					{/* Secondary Links Section */}
					<div className={classes.secondarySection}>
						<ul className={classes.secondaryList}>
							{secondaryLinks.map((item) => (
								<li
									key={item.id}
									className={classes.secondaryItem}
								>
									<Link
										href={item.url}
										className={classes.secondaryLink}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Locations Section */}
					<div className={classes.locationsSection}>
						{locations.map((location) => (
							<div key={location.id} className={classes.location}>
								<h3 className={classes.locationName}>
									{location.name}
								</h3>
								<p className={classes.locationPhone}>
									Tel:{' '}
									<a href={`tel:${location.phone}`}>
										{location.phone}
									</a>
								</p>
								<p className={classes.locationEmail}>
									<a href={`mailto:${location.email}`}>
										{location.email}
									</a>
								</p>
							</div>
						))}
					</div>

					{/* Copyright Section */}
					<div className={classes.copyrightSection}>
						<p className={classes.copyright}>
							© 2025 La Reserve. All rights reserved.
						</p>
					</div>
				</div>
			</Gutter>
		</footer>
	);
};
