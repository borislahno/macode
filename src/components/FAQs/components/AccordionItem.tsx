import {useState} from "react";

type AccordionItemProps = {
	title: string,
	text: string,
}

const AccordionItem: React.FC<AccordionItemProps> = ({title, text}) => {

	const [active, setActive] = useState<boolean>(false);

	const onButtonClick = () => setActive(!active);

	return (
		<div className='pb-[65px] md:pb-[30px] border-b border-b-gray'>
			<div className='flex justify-between items-center gap-[40px]'>
				<div className='font-bold text-3lg leading-[2.5rem] tracking-[0.25px]'>
					{title}
				</div>
				<button className={`btn relative basis-[62px] sm:basis-[50px] shrink-0 h-[62px] sm:h-[50px] rounded-full 
				${active ? 'bg-yellow' : 'bg-white'} hover:opacity-[0.7] ${active ? 'border-0' : 'border-2'}
				border-black`} onClick={onButtonClick}>
					<div className={`absolute top-1/2 left-1/2 w-[21px] h-[5px] ${active ? 'bg-black' : 'bg-yellow'} -translate-x-1/2 
						-translate-y-1/2 ${active ? 'rotate-0' : 'rotate-90'}`}/>
					<div className={`absolute top-1/2 left-1/2 w-[21px] h-[5px] ${active ? 'bg-black' : 'bg-yellow'} 
						-translate-x-1/2 -translate-y-1/2`}/>
				</button>
			</div>
			{active &&
        <div className='max-w-[780px] mt-[50px] md:mt-[30px] text-small'>
					{text}
        </div>}
		</div>
	);
}

export default AccordionItem;