import { CreatePageArgs } from 'gatsby';
import path from 'path';

const pages = [
	{ id: 1, content: '블로그 만들기' },
	{ id: 2, content: '타입적용하기' },
	{ id: 3, content: '할수있다' },
];

export async function createPages({ actions }: CreatePageArgs) {
	const { createPage } = actions;
	pages.forEach(page => {
		createPage({
			path: page.id.toString(),
			context: page,
			component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
		});
	});
}
