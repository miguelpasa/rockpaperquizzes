interface CarouselCardIndexIndicatorProps {
    currentIndex: number,
    totalIndex: number
};

export const CarouselCardIndexIndicator = ({ currentIndex, totalIndex } : CarouselCardIndexIndicatorProps) => {
    const items : JSX.Element[] = [];
    for(let i = 0; i < totalIndex; i++) {
        if (i === currentIndex) {
            items.push(
                <span
                    key={i}
                    className="rounded-full bg-slate-700 inline-block h-4 w-4 duration-300">
                </span>)
        } else {
            items.push(
                <span
                    key={i}
                    className="rounded-full bg-slate-100 border-solid border border-slate-500 inline-block h-4 w-4 duration-300">
                </span>
            )
        }
    }
    return (
        <div className="flex flex-row gap-x-5">
            { items }
        </div>
    )
}
    