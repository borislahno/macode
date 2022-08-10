import NewIcon from '../../../../public/svg/new.svg';

type PlanCardProps = {
	title: string,
	price: number,
	list: string[],
	active?: boolean,
}

const PlanCard: React.FC<PlanCardProps> = ({title, price, list, active}) =>
	<div className={`relative flex flex-col items-center gap-[30px] sm:gap-[20px] xl:w-[450px] sm:w-[350px] 
	basis-[393px] xl:basis-0 shrink-1 h-full pt-[68px] pb-[53px] px-[10px] 
	${active ? 'bg-black-light' : 'bg-gray-light'} rounded ${active ? 'text-white' : 'text-black'}`}>
		<div className='text-lg leading-[1.75rem] tracking-[0.25px]'>{title}</div>
		<div className={`-ml-[24px] ${active ? 'mb-0' : 'mb-[29px]'} text-xl font-bold leading-[3.6rem]`}>
			<sup className='inline-block mr-[6px] text-md font-normal leading-[1.75rem] -translate-y-[7px]
			sm:-translate-y-[4px]'>$</sup>
			{price}
		</div>
		<ul className='flex flex-col items-center gap-[10px] mb-[48px] sm:mb-[30px]'>
			{list.map(item =>
				<li className='text-usual' key={item}>{item}</li>
			)}
		</ul>
		<button className={`btn ${active ? 'btn-yellow' : 'btn-white'} w-[300px] h-[56px] rounded`}>Buy Now</button>
		{active && <NewIcon className='absolute top-[140px] left-[50px]'/>}
	</div>

export default PlanCard;