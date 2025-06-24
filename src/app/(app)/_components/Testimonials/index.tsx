import React from 'react';

import { Gutter } from '../Gutter';
import { Image } from '../Image';
import classes from './index.module.scss';

interface TestimonialItem {
	name: string;
	role: string;
	image?: any;
	testimonial?: string;
}

interface Props {
	title?: string;
	description?: string;
	testimonials: TestimonialItem[];
	backgroundColor?: 'white' | 'light' | 'dark';
	layout?: 'grid' | 'horizontal';
	columns?: '2' | '3' | '4';
}

export const Testimonials: React.FC<Props> = ({
	title,
	description,
	testimonials,
	backgroundColor = 'dark',
	layout = 'grid',
	columns = '3',
}) => {
	return (
		<section
			className={[
				classes.testimonials,
				classes[`testimonials--${backgroundColor}`],
			]
				.filter(Boolean)
				.join(' ')}
		>
			<Gutter>
				{title && <h2 className={classes.title}>{title}</h2>}
				{description && (
					<p className={classes.description}>{description}</p>
				)}

				<div
					className={[
						classes.testimonialsGrid,
						classes[`testimonialsGrid--${layout}`],
						layout === 'grid'
							? classes[`testimonialsGrid--${columns}cols`]
							: '',
					]
						.filter(Boolean)
						.join(' ')}
				>
					{testimonials.map((item, index) => (
						<div key={index} className={classes.testimonial}>
							{item.image && (
								<div className={classes.testimonialImage}>
									<Image
										alt={item.image?.alt || item.name}
										className={classes.image}
										resource={item.image}
									/>
								</div>
							)}

							<div className={classes.testimonialContent}>
								<h3 className={classes.testimonialName}>
									{item.name}
								</h3>
								<p className={classes.testimonialRole}>
									{item.role}
								</p>

								{item.testimonial && (
									<blockquote
										className={classes.testimonialText}
									>
										{item.testimonial}
									</blockquote>
								)}
							</div>
						</div>
					))}
				</div>
			</Gutter>
		</section>
	);
};
