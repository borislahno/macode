import ArrowUp from "../../../../public/svg/upArrow.svg";


const SectionOne: React.FC = () =>
	<div className="flex xl:flex-col justify-between xl:justify-start items-end xl:items-center gap-[80px] lg:gap-[30px] sm:gap-[15px]">
		<div className='relative'>
			<div className="iad w-[593px] md:w-[500px] sm:w-[400px] xs:w-[370px] xl:h-[380px] md:h-[320px] sm:h-[260px]
				xs:h-[230px] pt-[60.5%] xl:pt-0">
				<img src="/images/about/01.webp" alt="Code editor"/>
			</div>
			<img className="absolute top-[25%] md:top-[30%] sm:top-[34%] -right-[6%] md:-right-[3%] sm:-right-[2%]
				w-[170px] md:w-[110px] sm:w-[80px] xs:hidden"
					 src="/images/hero/04.webp" alt="Triangle image"/>
		</div>
		<div className="basis-[450px] xl:basis-0 xl:max-w-[850px]">
			<h3 className='mb-[35px] lg:mb-[25px] heading-tertiary lg:text-center'>
				The language for building web pages
			</h3>
			<div className='lg:max-w-[700px] lg:mx-auto mb-[48px] lg:mb-[35px] text-usual lg:text-center'>
				Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click
				and go code!
			</div>
			<button className='btn btn-black w-[259px] sm:w-[200px] h-[75px] sm:h-[60px] gap-[33px] sm:gap-[18px] lg:mx-auto'>
				Try it Yourself
				<ArrowUp className='w-[20px] h-[20px]'/>
			</button>
		</div>
	</div>

export default SectionOne;