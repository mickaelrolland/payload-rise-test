import React from 'react';

import { Button } from '../Button';
import { Gutter } from '../Gutter';
import { Image } from '../Image';
import classes from './index.module.scss';

interface HeroButton {
	label: string;
	style: 'primary' | 'secondary' | 'default';
	url: string;
}

interface Props {
	backgroundImage: any;
	buttons?: HeroButton[];
	height: 'small' | 'medium' | 'large' | 'fullscreen';
	overlay: 'none' | 'light' | 'dark';
	subtitle?: string;
	title: string;
}

export const Hero: React.FC<Props> = ({
	backgroundImage,
	buttons,
	height,
	overlay,
	subtitle,
	title,
}) => {
	return (
		<section
			className={[classes.hero, classes[`hero--${height}`]]
				.filter(Boolean)
				.join(' ')}
		>
			<div className={classes.background}>
				<Image
					alt={backgroundImage?.alt || title}
					className={classes.backgroundImage}
					fill
					resource={backgroundImage}
				/>
				{overlay !== 'none' && (
					<div
						className={[
							classes.overlay,
							classes[`overlay--${overlay}`],
						]
							.filter(Boolean)
							.join(' ')}
					/>
				)}
			</div>

			<Gutter className={classes.content}>
				<div className={classes.textContent}>
					<h1 className={classes.title}>{title}</h1>
					{subtitle && <p className={classes.subtitle}>{subtitle}</p>}

					{buttons && buttons.length > 0 && (
						<div className={classes.buttons}>
							{buttons.map((button, index) => (
								<Button
									key={index}
									appearance={button.style}
									href={button.url}
									label={button.label}
								/>
							))}
						</div>
					)}
				</div>
			</Gutter>
		</section>
	);
};
