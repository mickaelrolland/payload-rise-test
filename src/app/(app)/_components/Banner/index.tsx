import React from 'react';

import { Gutter } from '../Gutter';
import { RichText } from '../RichText';
import classes from './index.module.scss';

interface Props {
	title: string;
	subtitle?: string;
	content?: any;
	backgroundColor?: 'white' | 'light' | 'primary' | 'secondary';
	textAlign?: 'left' | 'center' | 'right';
	size?: 'small' | 'medium' | 'large';
}

export const Banner: React.FC<Props> = ({
	title,
	subtitle,
	content,
	backgroundColor = 'light',
	textAlign = 'left',
	size = 'medium',
}) => {
	return (
		<section
			className={[
				classes.banner,
				classes[`banner--${backgroundColor}`],
				classes[`banner--${textAlign}`],
				classes[`banner--${size}`],
			]
				.filter(Boolean)
				.join(' ')}
		>
			<Gutter>
				<div className={classes.content}>
					<h1 className={classes.title}>{title}</h1>
					{subtitle && <p className={classes.subtitle}>{subtitle}</p>}
					{content && (
						<div className={classes.richContent}>
							<RichText content={content} />
						</div>
					)}
				</div>
			</Gutter>
		</section>
	);
};
