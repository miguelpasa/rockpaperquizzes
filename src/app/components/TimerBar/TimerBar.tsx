import React from "react"

interface TimerBarProps {
    progress: number,
    isExampleCard? : boolean
}

export const TimerBar = ({ progress, isExampleCard } : TimerBarProps) => {
    // progress is a percentage so do the math so it fits in 150px
    if(isExampleCard) {
        return (
            <div className="flex flex-row mt-3 sm:w-[120px]">
                <div className={"bg-red-700 h-1 rounded-l-lg w-[" + ((progress / 100) * 120).toFixed() +"px]"}/>
                <div className="bg-slate-200 h-1 rounded-r-lg flex-1"/>
            </div>
        )
    } else {
        return (
            <div className="flex flex-row mt-8 h-2 sm:w-[300px]">
                <div className={"bg-red-700 rounded-l-lg w-[" + ((progress / 100) * 120).toFixed() +"px]"}/>
                <div className="bg-slate-200 rounded-lg flex-1"/>
            </div>
        )
    }
}