interface CarouselCardProps {
    children: JSX.Element,
    classNameAdditions: string
} 

export const CarouselCard = ({ children, classNameAdditions } : CarouselCardProps) => {
    return (
        <div className={"rounded-2xl absolute flex flex-col flex-1 items-center justify-center bg-slate-300 p-6 w-96 overflow-x-visible duration-500 " + classNameAdditions}>
            { (classNameAdditions.includes("hidden") || classNameAdditions.includes("opacity-0")) && !classNameAdditions.includes("previous") ? "" : children}
        </div>
    )
}