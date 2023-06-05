import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}


const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
  return (
    <div className={twMerge(`bg-neutral bg-neutral-800 rounded-lg h-fit w-full`, className)}>
        {children}
    </div>
  )
}

export default Box;