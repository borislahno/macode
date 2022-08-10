import ArrowUp from '../../public/svg/upArrow.svg';

const Form: React.FC = () =>
	<section className='relative z-10 px-[20px] -mb-[180px]'>
		<form className='flex flex-col items-center max-w-[1178px] mx-auto px-[15px] py-[52px] sm:py-[30px]
		bg-yellow rounded-lg shadow-form'>
			<h2 className='max-w-[880px] mb-[12px] heading-secondary sm:text-3lg md:text-xl text-center'>
				Start upgrading your skills free for this month
			</h2>
			<div className='mb-[38px] text-large sm:text-lg md:text-2lg text-center'>
				Build your site for free and take as long as you need
			</div>
			<div className='flex justify-center gap-[23px] sm:gap-[12px]'>
				<button className='btn btn-black-25 w-[236px] sm:w-[155px] h-[75px] sm:h-[55px]'>Try Yourself</button>
				<button className='btn btn-black gap-[33px] sm:gap-[15px] w-[236px] sm:w-[155px] h-[75px] sm:h-[55px]'>
					Get started
					<ArrowUp className='w-[20px] h-[20px]'/>
				</button>
			</div>
		</form>
	</section>

export default Form;