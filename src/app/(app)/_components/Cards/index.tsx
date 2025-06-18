import React from 'react';

import { Button } from '../Button';
import { Gutter } from '../Gutter';
import { Image } from '../Image';
import classes from './index.module.scss';

interface CardItem {
	description: string;
	image?: any;
	link?: {
		label?: string;
		url?: string;
	};
	title: string;
}

interface Props {
	cards: CardItem[];
	columns?: '2' | '3' | '4';
	description?: string;
	layout: 'grid' | 'horizontal';
	title?: string;
}

export const Cards: React.FC<Props> = ({
	cards,
	columns = '3',
	description,
	layout,
	title,
}) => {
	return (
		<section className={classes.cards}>
			<Gutter>
				{title && <h2 className={classes.title}>{title}</h2>}
				{description && (
					<p className={classes.description}>{description}</p>
				)}

				<div
					className={[
						classes.cardGrid,
						classes[`cardGrid--${layout}`],
						layout === 'grid'
							? classes[`cardGrid--${columns}cols`]
							: '',
					]
						.filter(Boolean)
						.join(' ')}
				>
					{cards.map((card, index) => (
						<div key={index} className={classes.card}>
							{card.image && (
								<div className={classes.cardImage}>
									<Image
										alt={card.image?.alt || card.title}
										className={classes.image}
										resource={card.image}
									/>
								</div>
							)}

							<div className={classes.cardContent}>
								<h3 className={classes.cardTitle}>
									{card.title}
								</h3>
								<p className={classes.cardDescription}>
									{card.description}
								</p>

								{card.link?.url && (
									<Button
										appearance="primary"
										href={card.link.url}
										label={card.link.label || 'Learn More'}
									/>
								)}
							</div>
						</div>
					))}
				</div>
			</Gutter>
		</section>
	);
};
