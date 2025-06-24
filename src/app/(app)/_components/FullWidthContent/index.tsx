import React from 'react';

import { Gutter } from '../Gutter';
import { RichText } from '../RichText';
import classes from './index.module.scss';

interface Props {
	title?: string;
	content: any;
	backgroundColor?: 'white' | 'light' | 'dark';
	hasPattern?: boolean;
	maxWidth?: 'small' | 'medium' | 'large' | 'full';
}

export const FullWidthContent: React.FC<Props> = ({
	title,
	content,
	backgroundColor = 'white',
	hasPattern = false,
	maxWidth = 'medium',
}) => {
	return (
		<section
			className={[
				classes.fullWidthContent,
				classes[`fullWidthContent--${backgroundColor}`],
				hasPattern && classes['fullWidthContent--pattern'],
			]
				.filter(Boolean)
				.join(' ')}
		>
			<Gutter>
				<div
					className={[
						classes.container,
						classes[`container--${maxWidth}`],
					]
						.filter(Boolean)
						.join(' ')}
				>
					{title && <h2 className={classes.title}>{title}</h2>}
					<div className={classes.content}>
						<RichText content={content} />
					</div>
				</div>
			</Gutter>
		</section>
	);
};
