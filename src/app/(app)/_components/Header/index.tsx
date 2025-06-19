import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import React from 'react';

import config from '../../../../payload.config';
import {
	getNavigationData,
	NavigationItem,
} from '../../../../utilities/buildNavigation';
import { Gutter } from '../Gutter';
import classes from './index.module.scss';

interface HeaderProps {
	currentSlug?: string;
}

interface NavigationProps {
	items: NavigationItem[];
	level?: number;
}

const NavigationMenu: React.FC<NavigationProps> = ({ items, level = 0 }) => {
	return (
		<ul className={`${classes.navList} ${classes[`level-${level}`]}`}>
			{items.map((item) => (
				<li
					key={item.id}
					className={`${classes.navItem} ${
						item.isActive ? classes.active : ''
					} ${item.isActiveParent ? classes.activeParent : ''}`}
				>
					<Link
						href={item.url}
						className={`${classes.navLink} ${
							item.children.length > 0 ? classes.hasChildren : ''
						}`}
					>
						{item.title}
						{item.children.length > 0 && (
							<span className={classes.dropdownIndicator}>⌄</span>
						)}
					</Link>

					{item.children.length > 0 && (
						<div className={classes.dropdown}>
							<NavigationMenu
								items={item.children}
								level={level + 1}
							/>
						</div>
					)}
				</li>
			))}
		</ul>
	);
};

export const Header = async ({ currentSlug }: HeaderProps = {}) => {
	const payload = await getPayload({ config });

	// Get hierarchical navigation data
	const navigationItems = await getNavigationData(payload, currentSlug);

	const hasNavItems =
		navigationItems &&
		Array.isArray(navigationItems) &&
		navigationItems.length > 0;

	return (
		<header className={classes.header}>
			<Gutter className={classes.wrap}>
				<Link className={classes.logo} href="/">
					<picture>
						<source
							media="(prefers-color-scheme: dark)"
							srcSet="https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-light.svg"
						/>
						<Image
							alt="Payload Logo"
							height={30}
							src="https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-dark.svg"
							width={150}
						/>
					</picture>
				</Link>

				{hasNavItems && (
					<nav className={classes.nav}>
						<NavigationMenu items={navigationItems} />
					</nav>
				)}

				{/* Mobile menu toggle */}
				<button
					className={classes.mobileMenuToggle}
					aria-label="Toggle mobile menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</Gutter>
		</header>
	);
};
