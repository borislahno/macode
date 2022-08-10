import ArrowUp from '../../../public/svg/upArrow.svg'
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

const About: React.FC = () =>
	<section className='max-w-[1440px] mx-auto py-[150px] lg:py-[100px] sm:py-[50px] px-[50px] lg:px-[30px] md:px-[20px]'>
		<SectionOne/>
		<SectionTwo/>
	</section>

export default About;