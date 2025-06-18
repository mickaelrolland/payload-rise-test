'use client';

import React from 'react';

import { CMSLink } from '../CMSLink';
import { Gutter } from '../Gutter';
import { Image } from '../Image';
import RichText from '../RichText';
import classes from './index.module.scss';

interface SocialMediaItem {
	platform:
		| 'facebook'
		| 'twitter'
		| 'instagram'
		| 'linkedin'
		| 'youtube'
		| 'tiktok'
		| 'other';
	customPlatform?: string;
	url: string;
}

interface FooterLinkSection {
	title: string;
	links: any[];
}

interface Props {
	footer: {
		companyInfo?: {
			name?: string;
			logo?: any;
			description?: any;
		};
		contactInfo?: {
			email?: string;
			phone?: string;
			address?: string;
		};
		footerLinks?: FooterLinkSection[];
		socialMedia?: SocialMediaItem[];
		bottomSection?: {
			copyrightText?: any;
			legalLinks?: any[];
		};
		newsletter?: {
			enabled?: boolean;
			title?: string;
			description?: string;
			placeholder?: string;
		};
	};
}

const socialMediaIcons = {
	facebook: '📘',
	twitter: '🐦',
	instagram: '📷',
	linkedin: '💼',
	youtube: '📺',
	tiktok: '🎵',
	other: '🔗',
};

export const Footer: React.FC<Props> = ({ footer }) => {
	const {
		companyInfo,
		contactInfo,
		footerLinks,
		socialMedia,
		bottomSection,
		newsletter,
	} = footer;

	const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle newsletter submission here
		const formData = new FormData(e.currentTarget);
		const email = formData.get('email');
		console.log('Newsletter signup:', email);
		// You can integrate with your newsletter service here
	};

	return (
		<footer className={classes.footer}>
			<Gutter>
				<div className={classes.container}>
					{/* Top Section */}
					<div className={classes.topSection}>
						{/* Company Info */}
						{companyInfo && (
							<div className={classes.companyInfo}>
								{companyInfo.logo && (
									<div className={classes.logo}>
										<Image
											alt={
												companyInfo.name ||
												'Company Logo'
											}
											resource={companyInfo.logo}
											className={classes.logoImage}
										/>
									</div>
								)}
								{companyInfo.name && (
									<h3 className={classes.companyName}>
										{companyInfo.name}
									</h3>
								)}
								{companyInfo.description && (
									<div className={classes.companyDescription}>
										<RichText
											content={companyInfo.description}
										/>
									</div>
								)}
							</div>
						)}

						{/* Footer Links */}
						{footerLinks && footerLinks.length > 0 && (
							<div className={classes.linksSection}>
								{footerLinks.map((section, index) => (
									<div
										key={index}
										className={classes.linkColumn}
									>
										<h4 className={classes.linkTitle}>
											{section.title}
										</h4>
										{section.links &&
											section.links.length > 0 && (
												<ul
													className={classes.linkList}
												>
													{section.links.map(
														(link, linkIndex) => (
															<li
																key={linkIndex}
																className={
																	classes.linkItem
																}
															>
																<CMSLink
																	{...link.link}
																/>
															</li>
														),
													)}
												</ul>
											)}
									</div>
								))}
							</div>
						)}

						{/* Contact Info & Newsletter */}
						<div className={classes.contactSection}>
							{contactInfo && (
								<div className={classes.contactInfo}>
									<h4 className={classes.contactTitle}>
										Contact
									</h4>
									{contactInfo.email && (
										<p className={classes.contactItem}>
											<span
												className={classes.contactLabel}
											>
												Email:
											</span>
											<a
												href={`mailto:${contactInfo.email}`}
											>
												{contactInfo.email}
											</a>
										</p>
									)}
									{contactInfo.phone && (
										<p className={classes.contactItem}>
											<span
												className={classes.contactLabel}
											>
												Phone:
											</span>
											<a
												href={`tel:${contactInfo.phone}`}
											>
												{contactInfo.phone}
											</a>
										</p>
									)}
									{contactInfo.address && (
										<p className={classes.contactItem}>
											<span
												className={classes.contactLabel}
											>
												Address:
											</span>
											{contactInfo.address}
										</p>
									)}
								</div>
							)}

							{newsletter?.enabled && (
								<div className={classes.newsletter}>
									{newsletter.title && (
										<h4 className={classes.newsletterTitle}>
											{newsletter.title}
										</h4>
									)}
									{newsletter.description && (
										<p
											className={
												classes.newsletterDescription
											}
										>
											{newsletter.description}
										</p>
									)}
									<form
										className={classes.newsletterForm}
										onSubmit={handleNewsletterSubmit}
									>
										<input
											type="email"
											name="email"
											placeholder={
												newsletter.placeholder ||
												'Enter your email'
											}
											className={classes.newsletterInput}
											required
										/>
										<button
											type="submit"
											className={classes.newsletterButton}
										>
											Subscribe
										</button>
									</form>
								</div>
							)}
						</div>
					</div>

					{/* Social Media */}
					{socialMedia && socialMedia.length > 0 && (
						<div className={classes.socialSection}>
							<h4 className={classes.socialTitle}>Follow Us</h4>
							<div className={classes.socialLinks}>
								{socialMedia.map((social, index) => (
									<a
										key={index}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className={classes.socialLink}
										title={
											social.customPlatform ||
											social.platform
										}
									>
										<span className={classes.socialIcon}>
											{socialMediaIcons[social.platform]}
										</span>
										<span className={classes.socialLabel}>
											{social.customPlatform ||
												social.platform}
										</span>
									</a>
								))}
							</div>
						</div>
					)}

					{/* Bottom Section */}
					{bottomSection && (
						<div className={classes.bottomSection}>
							<div className={classes.copyright}>
								{bottomSection.copyrightText && (
									<RichText
										content={bottomSection.copyrightText}
									/>
								)}
							</div>
							{bottomSection.legalLinks &&
								bottomSection.legalLinks.length > 0 && (
									<ul className={classes.legalLinks}>
										{bottomSection.legalLinks.map(
											(link, index) => (
												<li
													key={index}
													className={
														classes.legalLinkItem
													}
												>
													<CMSLink {...link.link} />
												</li>
											),
										)}
									</ul>
								)}
						</div>
					)}
				</div>
			</Gutter>
		</footer>
	);
};
