import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { buildConfig } from 'payload';

import { Categories } from './collections/Categories';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Posts } from './collections/Posts';
import { Users } from './collections/Users';
import { Footer } from './globals/Footer';
import { MainMenu } from './globals/MainMenu';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// eslint-disable-next-line no-restricted-exports
export default buildConfig({
	admin: {
		livePreview: {
			breakpoints: [
				{
					name: 'mobile',
					height: 667,
					label: 'Mobile',
					width: 375,
				},
			],
		},
	},
	collections: [Pages, Posts, Media, Categories, Users],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || '',
	}),
	editor: slateEditor({}),
	globals: [MainMenu, Footer],
	secret: process.env.PAYLOAD_SECRET || '',
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
});
