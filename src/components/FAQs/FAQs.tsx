import AccordionItem from "./components/AccordionItem";

const FAQs: React.FC = () =>
	<section className='px-[20px] pb-[210px] md:pb-[170px] sm:pb-[120px]'>
		<div className='max-w-[1340px] mx-auto'>
			<h3 className='mb-[60px] md:mb-[30px] heading-tertiary text-center'>FAQs</h3>
			<div className='flex flex-col gap-[59px] sm:gap-[30px]'>
				<AccordionItem title="01. Can I Find the right information faster?"
											 text="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac
													 efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
				/>
				<AccordionItem title="02. How to share feature demos and ideas?"
											 text="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac
													 efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
				/>
				<AccordionItem title="03. How to get insights from users?"
											 text="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac
													 efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
				/>
				<AccordionItem title="04. Can I develop my website without code?"
											 text="Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac
													 efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
				/>
			</div>
		</div>
	</section>

export default FAQs;