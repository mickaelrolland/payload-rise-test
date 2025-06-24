import React from 'react';

import { Gutter } from '../Gutter';
import { RichText } from '../RichText';
import classes from './index.module.scss';

interface Props {
	columns: 'single' | 'two';
	content: any;
	secondColumn?: any;
}

export const Content: React.FC<Props> = ({
	columns,
	content,
	secondColumn,
}) => {
	return (
		<section className={classes.content}>
			<Gutter>
				{columns === 'single' ? (
					<div className={classes.singleColumn}>
						<RichText content={content} />
					</div>
				) : (
					<div className={classes.twoColumns}>
						<div className={classes.column}>
							<RichText content={content} />
						</div>
						<div className={classes.column}>
							<RichText content={secondColumn} />
						</div>
					</div>
				)}
			</Gutter>
		</section>
	);
};
