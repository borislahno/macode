import RightArrow from '../../public/svg/rightArrow.svg';
import LinkItem from "../components/LinkItem";

const Header: React.FC = () =>
	<header className='absolute top-0 left-0 w-full pl-[50px] lg:px-[20px] sm:px-[10px] pt-[56px]'>
		<div className='flex gap-[70px] sm:gap-[30px] xs:gap-[20px] items-center max-w-[1440px] mx-auto'>
			<div className='flex justify-center items-center basis-[32px] shrink-0 grow-0 h-[32px] rounded-full bg-black'>
				<RightArrow className='w-[15px] h-[15px] fill-white'/>
			</div>
			<nav>
				<ul className="flex gap-[45px] sm:gap-[20px] xs:gap-[15px]">
					<LinkItem to="/" name="Tutorials" color="black" size="2md"/>
					<LinkItem to="/" name="Case studies" color="black" size="2md"/>
					<LinkItem to="/" name="Resources" color="black" size="2md"/>
				</ul>
			</nav>
		</div>
	</header>

export default Header;