import type {NextPage} from 'next'
import LogoBox from "../src/components/LogoBox";
import Features from "../src/components/Features/Features";
import About from "../src/components/About/About";
import TariffPlans from "../src/components/TariffPlans/TariffPlans";
import FAQs from "../src/components/FAQs/FAQs";
import Form from "../src/components/Form";
import Hero from "../src/components/Hero";
import Head from "next/head";

const Home: NextPage = () =>
	<>
		<Head>
			<title>Macode | Improve your skills</title>
			<meta name="description"
						content="Create, launch, and iterate on new marketing campaigns without distracting your product team."
			/>
		</Head>
		<Hero/>
		<LogoBox/>
		<Features/>
		<About/>
		<TariffPlans/>
		<FAQs/>
		<Form/>
	</>

export default Home
