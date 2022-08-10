import WaveIcon from '../../public/svg/wave.svg';
import ArrowUp from '../../public/svg/upArrow.svg';
import RadioButtonIcon from '../../public/svg/radioButton.svg';

const Hero: React.FC = () =>
	<section className='pl-[50px] lg:px-[20px] lg:pt-[130px] bg-gray-light'>
		<div className='flex lg:flex-col items-center gap-[30px] lg:gap-0 max-w-[1440px] mx-auto'>
			<div className='basis-[604px] grow-0'>
				<h1 className='mb-[76px] lg:mb-[35px] heading-primary'>
					Improve your skills by study with coding
				</h1>
				<WaveIcon/>
				<div className='max-w-[360px] lg:max-w-[500px] mb-[111px] lg:mb-[50px] text-small'>
					Create, launch, and iterate on new
					marketing campaigns without distracting
					your product team.
				</div>
				<button className='btn btn-black gap-[33px] w-[236px] sm:w-[180px] h-[75px] sm:h-[65px] sm:mx-auto'>
					Get started
					<ArrowUp className='w-[20px] h-[20px]'/>
				</button>
			</div>
			<div className='relative basis-[704px] sm:basis-[500px] h-[905px] sm:-mt-[70px] bg-black-light'>
				<img className='absolute z-40 bottom-0 right-0 sm:w-[400px]' src="/images/hero/01.webp" alt="Some person"/>
				<img src="/images/hero/03.webp" alt="Some image"/>
				<img className='absolute top-[42%] lg:top-[30%] left-[-25%] lg:left-[-5%] lg:w-[80%]'
						 src="/images/hero/02.webp" alt="Code editor"/>
				<img className='absolute z-50 -bottom-[60px] lg:-bottom-[50px] sm:-bottom-[25px] right-[10%] -rotate-[30deg] lg:w-[150px]
				sm:w-[80px]' src="/images/hero/04.webp" alt="Triangle image"/>
				<div className='absolute z-[60] bottom-0 left-0 flex items-center gap-[20px] w-[60%] sm:w-[50%] h-[67px] sm:h-[50px]
				pl-[10%] sm:pl-[5%] bg-black-light50 backdrop-blur-[15px]'>
					<RadioButtonIcon/>
					<div className='font-light text-[1.125rem] leading-[1.5rem] text-white'>Name (Skill)</div>
				</div>
			</div>
		</div>
	</section>

export default Hero;