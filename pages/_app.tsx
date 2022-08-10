import type {AppProps} from 'next/app'
import '../src/styles/index.css';
import Layout from "../src/layout/Layout";

const MyApp = ({Component, pageProps}: AppProps) =>
	<Layout>
		<Component {...pageProps} />
	</Layout>

export default MyApp
