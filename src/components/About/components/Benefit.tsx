import {ReactNode} from "react";

type BenefitProps = {
	title: string,
	text: string,
	icon: ReactNode,
}

const Benefit: React.FC<BenefitProps> = ({icon, title, text}) =>
	<div className="flex flex-col sm:flex-row gap-[61px] lg:gap-[30px] max-w-[224px] sm:max-w-[300px]">
		<div className='basis-[44px] shrink-0'>{icon}</div>
		<div>
			<div className='mb-[19px] lg:mb-[6px] font-bold text-3lg tracking-[0.25px]'>{title}</div>
			<div className='text-small'>{text}</div>
		</div>
	</div>

export default Benefit;