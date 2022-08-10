import PlanCard from "./components/PlanCard";

const TariffPlans: React.FC = () =>
	<section className='px-[20px] pb-[169px] md:pb-[120px] sm:pb-[70px] sm:mt-[30px]'>
		<div className='max-w-[1255px] mx-auto'>
			<h3 className='mb-[35px] sm:mb-[15px] heading-tertiary text-center'>Choose your package</h3>
			<div className='mb-[80px] sm:mb-[40px] text-usual text-center'>We provide various types of packages just for you</div>
			<div className='flex xl:flex-col items-end xl:items-center gap-[38px]'>
				<PlanCard title="DEVELOPMENT" price={10}
									list={['1 Module Javascript', '1 Module Human Resources']}/>
				<PlanCard title="IT & SOFTWARE" price={30}
									list={['1 Module Javascript', '1 Module Human Resources', '2 Module Sales Teams', 'Pack Marketing Skills', '5 Module Study Case']}
									active={true}/>
				<PlanCard title="BUSINESS" price={30}
									list={['1 Module Javascript', '1 Module Human Resources', '2 Module Sales Teams']}/>
			</div>
		</div>
	</section>

export default TariffPlans;