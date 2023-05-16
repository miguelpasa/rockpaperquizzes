'use client'
import React, { Ref } from "react";
import { CarouselCard } from "./CarouselCard/CarouselCard"
import { CarouselCardIndexIndicator } from "./CarouselCardIndexIndicator/CarouselCardIndexIndicator";

interface PageCarouselProps {
    children : JSX.Element[],
    name: string
};

export const PageCarousel = ({ children, name } : PageCarouselProps) => {
    const [currentActiveCardState, setCurrentActiveCardState] = React.useState<number>(0);
    const [animateNextButton, setAnimateNextButton] = React.useState<boolean>(false);
    
    const handleNextClicked = () => {
        if (currentActiveCardState < children.length - 1) {
            setCurrentActiveCardState(currentActiveCardState + 1);
        }
    }

    console.log('rerender')
    console.log(name)

    return (
        <div className="container flex flex-col flex-grow space-y-1">
            <div className="items-center flex flex-row pt-64 pb-60 overflow-x-visible">
                {
                    children.map((child, index) => {
                        let positionClasses : string;
                        if(index === currentActiveCardState) {
                            // current
                            positionClasses = "left-1/2 -translate-x-1/2 active"
                        } else if (index === currentActiveCardState - 1) {
                            // previous
                            positionClasses = "left-0 -translate-x-1/2 previous opacity-0"
                        } else if (index === currentActiveCardState + 1) {
                            // next
                            positionClasses = "left-full -translate-x-1/2 next opacity-0"
                        } else {
                            positionClasses = "hidden"
                        }
                        return <CarouselCard
                            key={index}
                            classNameAdditions={ " " + positionClasses}>
                                {child}
                            </CarouselCard>;
                    })
                }
            </div>
            <div className="self-center flex">
                <button
                    className={"rounded-2xl flex justify-center  p-6 w-96 duration-300" + (animateNextButton ? " animate-shrinkgrow" : "") + (name === "" ? " bg-slate-200 text-gray-300" : " bg-slate-300 hover:bg-slate-200")}
                    onClick={() => {
                        setAnimateNextButton(true)
                        handleNextClicked();
                    }}
                    onAnimationEnd={() => {
                        setAnimateNextButton(false);
                    }}
                    disabled={name === ""}>
                        Next
                </button>
            </div>
            <div className="self-center flex pt-8">
                <CarouselCardIndexIndicator
                    currentIndex={currentActiveCardState}
                    totalIndex={children.length}/>
            </div>
        </div>
    )
}