'use client';

import React, { useState } from 'react';

import { Gutter } from '../Gutter';
import { Image } from '../Image';
import classes from './index.module.scss';

interface GalleryImage {
	caption?: string;
	image: any;
}

interface Props {
	columns?: '2' | '3' | '4';
	description?: string;
	images: GalleryImage[];
	layout: 'grid' | 'masonry' | 'carousel';
	title?: string;
}

export const Gallery: React.FC<Props> = ({
	columns = '3',
	description,
	images,
	layout,
	title,
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	if (layout === 'carousel') {
		return (
			<section className={classes.gallery}>
				<Gutter>
					{title && <h2 className={classes.title}>{title}</h2>}
					{description && (
						<p className={classes.description}>{description}</p>
					)}

					<div className={classes.carousel}>
						<div
							className={classes.carouselTrack}
							style={{
								transform: `translateX(-${currentSlide * 100}%)`,
							}}
						>
							{images.map((item, index) => (
								<div
									key={index}
									className={classes.carouselSlide}
								>
									<Image
										alt={
											item.image?.alt ||
											item.caption ||
											`Gallery image ${index + 1}`
										}
										className={classes.carouselImage}
										resource={item.image}
									/>
									{item.caption && (
										<p className={classes.carouselCaption}>
											{item.caption}
										</p>
									)}
								</div>
							))}
						</div>

						<button
							className={[
								classes.carouselButton,
								classes.carouselButtonPrev,
							].join(' ')}
							onClick={() =>
								setCurrentSlide((prev) =>
									prev > 0 ? prev - 1 : images.length - 1,
								)
							}
							type="button"
						>
							‹
						</button>
						<button
							className={[
								classes.carouselButton,
								classes.carouselButtonNext,
							].join(' ')}
							onClick={() =>
								setCurrentSlide((prev) =>
									prev < images.length - 1 ? prev + 1 : 0,
								)
							}
							type="button"
						>
							›
						</button>

						<div className={classes.carouselDots}>
							{images.map((_, index) => (
								<button
									key={index}
									className={[
										classes.carouselDot,
										index === currentSlide
											? classes.carouselDotActive
											: '',
									]
										.filter(Boolean)
										.join(' ')}
									onClick={() => setCurrentSlide(index)}
									type="button"
								/>
							))}
						</div>
					</div>
				</Gutter>
			</section>
		);
	}

	return (
		<section className={classes.gallery}>
			<Gutter>
				{title && <h2 className={classes.title}>{title}</h2>}
				{description && (
					<p className={classes.description}>{description}</p>
				)}

				<div
					className={[
						classes.grid,
						classes[`grid--${columns}cols`],
						classes[`grid--${layout}`],
					]
						.filter(Boolean)
						.join(' ')}
				>
					{images.map((item, index) => (
						<div key={index} className={classes.gridItem}>
							<Image
								alt={
									item.image?.alt ||
									item.caption ||
									`Gallery image ${index + 1}`
								}
								className={classes.gridImage}
								resource={item.image}
							/>
							{item.caption && (
								<p className={classes.gridCaption}>
									{item.caption}
								</p>
							)}
						</div>
					))}
				</div>
			</Gutter>
		</section>
	);
};
