'use client';

import NextImage from 'next/image';
import React from 'react';

import type { Media } from '../../../../payload-types';

import classes from './index.module.scss';

interface Props {
	alt?: string;
	className?: string;
	fill?: boolean;
	height?: number;
	loading?: 'lazy' | 'eager';
	priority?: boolean;
	resource?: Media | string;
	sizes?: string;
	src?: string;
	width?: number;
}

export const Image: React.FC<Props> = ({
	alt: altFromProps,
	className,
	fill,
	height: heightFromProps,
	loading = 'lazy',
	priority,
	resource,
	sizes: sizesFromProps,
	src: srcFromProps,
	width: widthFromProps,
}) => {
	let width: number | undefined;
	let height: number | undefined;
	let alt = altFromProps;
	let src: string = srcFromProps || '';

	if (!src && resource && typeof resource === 'object') {
		const {
			alt: altFromResource,
			filename: fullFilename,
			height: fullHeight,
			url,
			width: fullWidth,
		} = resource;

		width = fullWidth!;
		height = fullHeight!;
		alt = altFromResource;

		src = url || '';
	}

	// Override with provided width and height
	if (widthFromProps && heightFromProps) {
		width = widthFromProps;
		height = heightFromProps;
	}

	const sizes =
		sizesFromProps ||
		`(max-width: 400px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw`;

	if (!src) return null;

	if (fill) {
		return (
			<NextImage
				alt={alt || ''}
				className={className}
				fill
				loading={loading}
				priority={priority}
				quality={90}
				sizes={sizes}
				src={src}
			/>
		);
	}

	return (
		<NextImage
			alt={alt || ''}
			className={className}
			height={height}
			loading={loading}
			priority={priority}
			quality={90}
			sizes={sizes}
			src={src}
			width={width}
		/>
	);
};
