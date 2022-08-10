import RightArrowIcon from '../../public/svg/rightArrow.svg'
import FacebookIcon from '../../public/svg/facebook.svg';
import InstagramIcon from '../../public/svg/instagram.svg';
import LinkedInIcon from '../../public/svg/linkedin.svg';
import TwitterIcon from '../../public/svg/twitter.svg';
import GmailIcon from '../../public/svg/gmail.svg';

import LinkItem from "../components/LinkItem";

const Footer: React.FC = () =>
	<footer className='px-[20px] xs:px-[10px] pt-[290px] sm:pt-[230px] pb-[100px] sm:pb-[50px] bg-black-light'>
		<div className='flex flex-col gap-[26px] max-w-[1341px] mx-auto'>
			<div className='flex md:flex-col justify-between items-center gap-[20px] px-[30px] lg:px-0'>
				<div className='flex items-center gap-[19px] font-bold text-3lg leading-[2.5px] tracking-[0.25px] text-white'>
					<div className='flex justify-center items-center w-[32px] h-[32px] rounded-full bg-yellow'>
						<RightArrowIcon className="w-[14px] h-[14px] fill-black-light"/>
					</div>
					Macode
				</div>
				<nav>
					<ul className="flex gap-[69px] lg:gap-[30px] xs:gap-[15px]">
						<LinkItem to="/" name="Tutorials"/>
						<LinkItem to="/" name="Case Studies"/>
						<LinkItem to="/" name="Resources"/>
					</ul>
				</nav>
			</div>
			<div className="h-[2px] bg-gray"/>
			<div className='flex xs:flex-col justify-between items-center gap-[20px] px-[30px] lg:px-0'>
				<div className='flex items-center gap-[20px]'>
					<a href="#"><FacebookIcon/></a>
					<a href="#"><InstagramIcon/></a>
					<a href="#"><LinkedInIcon/></a>
					<a href="#"><TwitterIcon/></a>
					<a href="#"><GmailIcon/></a>
				</div>
				<div className='font-light text-lg tracking-[0.25px] text-white'>
					© 2021 Copyright.
					<span className='text-yellow'> Macode.io</span>
				</div>
			</div>
		</div>
	</footer>

export default Footer;