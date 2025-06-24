import React from 'react';

import { Gutter } from '../Gutter';
import { Image } from '../Image';
import { RichText } from '../RichText';
import classes from './index.module.scss';

interface Props {
	title?: string;
	content: any;
	image: any;
	imagePosition: 'left' | 'right';
	backgroundColor?: 'white' | 'light' | 'dark';
	size?: 'small' | 'medium' | 'large';
}

export const TextImageSection: React.FC<Props> = ({
	title,
	content,
	image,
	imagePosition,
	backgroundColor = 'white',
	size = 'medium',
}) => {
	return (
		<section
			className={[
				classes.textImageSection,
				classes[`textImageSection--${backgroundColor}`],
				classes[`textImageSection--${size}`],
			]
				.filter(Boolean)
				.join(' ')}
		>
			<Gutter>
				<div
					className={[
						classes.container,
						classes[`container--image-${imagePosition}`],
					]
						.filter(Boolean)
						.join(' ')}
				>
					<div className={classes.textContent}>
						{title && <h2 className={classes.title}>{title}</h2>}
						<div className={classes.content}>
							<RichText content={content} />
						</div>
					</div>
					<div className={classes.imageContent}>
						<Image
							alt={image?.alt || title || 'Section image'}
							className={classes.image}
							resource={image}
						/>
					</div>
				</div>
			</Gutter>
		</section>
	);
};
