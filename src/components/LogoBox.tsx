import EdxLogo from '../../public/svg/edx.svg';
import CourseraLogo from '../../public/svg/coursera.svg';
import UdemyLogo from '../../public/svg/udemy.svg';

const LogoBox: React.FC = () =>
	<section className="px-[20px] sm:px-[10px] py-[78px] sm:py-[45px]">
		<div className="flex justify-between items-center gap-[15px] max-w-[1172px] mx-auto">
			<EdxLogo className="basis-[196px] lg:basis-[157px] md:basis-[117px] sm:basis-[70px] xs:basis-[60px]"/>
			<CourseraLogo className="basis-[334px] lg:basis-[240px]  md:basis-[180px] sm:basis-[130px] xs:basis-[120px]"/>
			<UdemyLogo className="basis-[334px] lg:basis-[240px] md:basis-[180px] sm:basis-[130px] xs:basis-[120px]"/>
		</div>
	</section>

export default LogoBox;