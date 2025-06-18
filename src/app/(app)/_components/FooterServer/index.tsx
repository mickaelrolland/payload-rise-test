import { getPayload } from 'payload';
import React from 'react';

import config from '../../../../payload.config';
import { Footer } from '../Footer';

export const FooterServer = async () => {
	const payload = await getPayload({ config });

	let footer;
	try {
		footer = await payload.findGlobal({
			slug: 'footer',
			depth: 2,
		});
	} catch (error) {
		console.error('Failed to fetch footer data:', error);
		footer = {};
	}

	return <Footer footer={footer} />;
};
