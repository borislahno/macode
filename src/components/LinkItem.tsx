import Link from "next/link";

type LinkItemProps = {
	to: string,
	name: string,
	color?: 'white' | 'black',
	size?: '2lg' | '2md'
}

const LinkItem: React.FC<LinkItemProps> = ({size = '2lg', color = 'white', to, name}) =>
	<li>
		<Link href={to}>
			<a className={`font-light text-${size} sm:text-${size === '2md' ? 'lg' : '2lg'} text-${color} leading-[2.25rem] tracking-[0.25px] hover:text-gray`}>
				{name}
			</a>
		</Link>
	</li>

export default LinkItem;