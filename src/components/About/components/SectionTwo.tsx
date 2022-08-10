import Benefit from "./Benefit";
import UniversityIcon from '../../../../public/svg/university.svg';
import ShowCaseIcon from '../../../../public/svg/showCase.svg';

const SectionTwo: React.FC = () =>
	<div className='flex lg:flex-col justify-between lg:items-center gap-[50px] lg:gap-[70px] mt-[157px] lg:mt-[100px]'>
		<div className='basis-[544px] lg:basis-0 grow-0 shrink-1 lg:max-w-[544px]'>
			<h3 className='mb-[98px] lg:mb-[60px] heading-tertiary lg:text-center'>
				Get up and running fast together
			</h3>
			<div className="flex sm:flex-col justify-between sm:items-center gap-[20px] md:gap-[15px] sm:gap-[40px]">
				<Benefit title="University"
								 text="Browse hundreds of in-depth videos, courses, and guides to get up and running fast"
								 icon={<UniversityIcon/>}/>
				<div className='w-[2px] sm:h-[2px] sm:w-[300px] bg-gray-light'/>
				<Benefit title="Showcase"
								 text="Get inspired by the incredible websites built by members of the community"
								 icon={<ShowCaseIcon/>}/>
			</div>
		</div>
		<div className='iad basis-[476px] lg:basis-[574px] md:basis-[500px] sm:basis-[400px] grow-0 shrink-0 h-[574px] lg:w-[476px] md:w-[400px] sm:w-[320px]
		rounded-md after:content-[""] after:absolute after:-top-[26px] sm:after:-top-[14px] after:-left-[22px] sm:after:-left-[14px] after:w-[522px] md:after:w-[445px] sm:after:w-[348px]
		after:h-[491px] md:after:h-[420px] sm:after:h-[340px] after:bg-black-light after:rounded-md'>
			<img className="z-10 rounded-md overflow-hidden" src="/images/about/02.webp" alt="Anthoney Mills"/>
		</div>
	</div>

export default SectionTwo;