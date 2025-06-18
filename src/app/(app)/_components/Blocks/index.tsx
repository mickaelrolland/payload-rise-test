import React from 'react';

import { Banner } from '../Banner';
import { Cards } from '../Cards';
import { Content } from '../Content';
import { FullWidthContent } from '../FullWidthContent';
import { Gallery } from '../Gallery';
import { Hero } from '../Hero';
import { TextImageSection } from '../TextImageSection';
import { Video } from '../Video';

const blockComponents = {
	banner: Banner,
	hero: Hero,
	content: Content,
	textImageSection: TextImageSection,
	fullWidthContent: FullWidthContent,
	gallery: Gallery,
	cards: Cards,
	video: Video,
};

interface Props {
	blocks: Array<any>;
}

export const Blocks: React.FC<Props> = ({ blocks }) => {
	return (
		<>
			{blocks?.map((block, index) => {
				const { blockType, ...blockProps } = block;
				const BlockComponent = blockComponents[blockType];

				if (BlockComponent) {
					return <BlockComponent key={index} {...blockProps} />;
				}

				return null;
			})}
		</>
	);
};
