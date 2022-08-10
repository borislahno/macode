import {Html, Head, Main, NextScript} from 'next/document';

const Document: React.FC = () =>
	<Html lang="en">
		<Head>
			<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
			<link rel="icon" href="/favicon/favicon.svg"/>
			<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.svg"/>
			<link rel="manifest" href="/manifest.json"/>
		</Head>
		<body>
		<Main/>
		<NextScript/>
		</body>
	</Html>


export default Document;