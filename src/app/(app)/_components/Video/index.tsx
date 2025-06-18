'use client';

import React, { useState } from 'react';

import { Gutter } from '../Gutter';
import { Image } from '../Image';
import classes from './index.module.scss';

interface Props {
	aspectRatio: '16:9' | '4:3' | '1:1';
	autoplay?: boolean;
	description?: string;
	thumbnail?: any;
	title?: string;
	videoId?: string;
	videoType: 'youtube' | 'vimeo' | 'direct';
	videoUrl?: string;
}

export const Video: React.FC<Props> = ({
	aspectRatio,
	autoplay = false,
	description,
	thumbnail,
	title,
	videoId,
	videoType,
	videoUrl,
}) => {
	const [isPlaying, setIsPlaying] = useState(autoplay);

	// Fonction pour extraire l'ID depuis une URL YouTube
	const extractYouTubeId = (url?: string) => {
		if (!url) return '';

		// Si c'est déjà juste un ID (pas d'URL), le retourner tel quel
		if (url.length === 11 && !url.includes('/') && !url.includes('?')) {
			return url;
		}

		// Patterns pour différents formats d'URL YouTube
		const patterns = [
			/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
			/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
			/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
		];

		for (const pattern of patterns) {
			const match = url.match(pattern);
			if (match) {
				return match[1];
			}
		}

		return url; // Retourner l'original si aucun pattern ne correspond
	};

	// Fonction pour extraire l'ID depuis une URL Vimeo
	const extractVimeoId = (url?: string) => {
		if (!url) return '';

		// Si c'est déjà juste un ID numérique, le retourner tel quel
		if (/^\d+$/.test(url)) {
			return url;
		}

		// Pattern pour Vimeo
		const match = url.match(/(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/);
		return match ? match[1] : url;
	};

	const getEmbedUrl = () => {
		if (videoType === 'youtube' && videoId) {
			const cleanId = extractYouTubeId(videoId);
			return `https://www.youtube.com/embed/${cleanId}${autoplay ? '?autoplay=1' : ''}`;
		}
		if (videoType === 'vimeo' && videoId) {
			const cleanId = extractVimeoId(videoId);
			return `https://player.vimeo.com/video/${cleanId}${autoplay ? '?autoplay=1' : ''}`;
		}
		if (videoType === 'direct' && videoUrl) {
			return videoUrl;
		}
		return '';
	};

	const handlePlay = () => {
		setIsPlaying(true);
	};

	const embedUrl = getEmbedUrl();

	return (
		<section className={classes.video}>
			<Gutter>
				{title && <h2 className={classes.title}>{title}</h2>}
				{description && (
					<p className={classes.description}>{description}</p>
				)}

				<div
					className={[
						classes.videoContainer,
						classes[
							`aspectRatio--${aspectRatio.replace(':', '-')}`
						],
					].join(' ')}
				>
					{!isPlaying && thumbnail ? (
						<div className={classes.thumbnail} onClick={handlePlay}>
							<Image
								alt={
									thumbnail?.alt || title || 'Video thumbnail'
								}
								className={classes.thumbnailImage}
								fill
								resource={thumbnail}
							/>
							<button
								className={classes.playButton}
								type="button"
							>
								<svg viewBox="0 0 24 24" fill="currentColor">
									<path d="M8 5v14l11-7z" />
								</svg>
							</button>
						</div>
					) : (
						<>
							{videoType === 'direct' ? (
								<video
									autoPlay={autoplay}
									className={classes.videoElement}
									controls
									src={embedUrl}
								/>
							) : (
								<iframe
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className={classes.iframe}
									src={embedUrl}
									title={title || 'Video'}
								/>
							)}
						</>
					)}
				</div>
			</Gutter>
		</section>
	);
};
