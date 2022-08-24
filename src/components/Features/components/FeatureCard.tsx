import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode,
  title: string,
  text: string,
  className?: string,
  variant?: 'white' | 'yellow',
  onClick: () => void,
}

const FeatureCard: React.FC<FeatureCardProps> = ({onClick, variant = 'white', icon, title, text, className}) => {


  return (
    <div className={`basis-[317px] md:basis-[270px] sm:basis-[220px] shrink-0 grow-0 pt-[32px] pb-[38px] px-[29px] sm:px-[14px] rounded-md bg-${variant} cursor-pointer`}
         onClick={onClick}>
      <div className='flex justify-center items-center w-[83px] h-[83px] mb-[69px] md:mb-[40px] bg-white rounded'>
        {icon}
      </div>
      <div className='mb-[15px] text-3lg font-bold tracking-[0.25px]'>
        {title}
      </div>
      <div className='max-w-[160px] sm:max-w-full text-small'>
        {text}
      </div>
    </div>
  );
}

export default FeatureCard;