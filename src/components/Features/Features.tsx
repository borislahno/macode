import FeatureCard from "./components/FeatureCard";
import AccessIcon from '../../../public/svg/access.svg';
import TutorsIcon from '../../../public/svg/tutors.svg';
import FlexibleIcon from '../../../public/svg/flexible.svg';
import {useRef, WheelEventHandler} from "react";

const Features: React.FC = () => {

	const cardBox = useRef<HTMLDivElement>(null);

	const onScroll = (event: any) => {
		if (cardBox.current) {
			cardBox.current.scrollLeft += (event.deltaY);
		}
	}

	return (
		<section className='flex md:flex-col justify-between gap-[40px] pt-[119px] md:pt-[70px] xs:pt-[35px] pb-[56px] xs:pb-[35px] pl-[50px] sm:pl-[20px]
		 bg-gray-light'>
			<div className='max-w-[345px]'>
				<h3 className='mb-[46px] md:mb-[24px] heading-tertiary'>Our Features Special For You</h3>
				<div className='max-w-[256px] mb-[87px] md:mb-[40px] text-usual'>We provide various special features for all of you</div>
				<div className='flex gap-[12px] h-[11px]'>
					<div className='w-[82px] h-full bg-yellow'/>
					<div className='w-[51px] h-full mr-[2px] bg-gray'/>
					<div className='w-[51px] h-full bg-gray'/>
				</div>
			</div>
			<div className='flex gap-[39px] sm:gap-[20px] max-w-[812px] overflow-x-auto scroll-hide' ref={cardBox} onWheel={onScroll}>
				<FeatureCard icon={<TutorsIcon className="w-[40px] h-[40px]"/>} title="Best Tutors"
										 text="Bring your design vision to life in clean, semantic HTML5"/>
				<FeatureCard icon={<FlexibleIcon className="w-[40px] h-[40px]"/>} title="Flexible"
										 text="Connect your marketing tools with built-in integrations" variant="yellow"/>
				<FeatureCard icon={<AccessIcon className="w-[40px] h-[40px]"/>} title="Easy Access"
										 text="Connect your marketing tools with built-in integrations"/>
			</div>
		</section>
	);
}

export default Features;