import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage: React.FC = () => (
	<Layout>
		<Seo title="HOME" />
		<h1>Hello TypeScript</h1>
		<p>Welcome</p>
		<Link to="/page-2/">Go to Page 2</Link>
	</Layout>
);

export default IndexPage;
