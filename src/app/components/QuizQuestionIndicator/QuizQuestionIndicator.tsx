interface QuizQuestionIndicatorProps {
    amount: number,
    currentQuestion?: number,
    isExampleCard?: boolean
}

export const QuizQuestionIndicator = ({ amount, currentQuestion, isExampleCard } : QuizQuestionIndicatorProps) => {
    const indicators : JSX.Element[] = []
    for(let i = 0; i < amount; i++) {
        let classes = ""
        if(isExampleCard) {
            classes += "h-2 w-2 "
        } else {
            classes += "h-4 w-4 "
        }
        if(currentQuestion) {
            if(i === currentQuestion) {
                classes += "rounded-full bg-slate-700 inline-block duration-300"
            } else {
                classes += "rounded-full bg-slate-100 border-solid border border-slate-500 inline-block duration-300"
            }
        } else {
            if(i === 0) {
                classes += "rounded-full bg-slate-700 inline-block duration-300"
            } else {
                classes += "rounded-full bg-slate-100 border-solid border border-slate-500 inline-block duration-300"
            }
        }
        indicators.push(
            <span
                key={i}
                className={classes}>
            </span>
        )
    }
    return (
        <div className={
            isExampleCard ? 
                "flex flex-row gap-x-1 mt-2" :
                "flex flex-row gap-x-4 mt-2"}>
            { indicators }
        </div>
    )
}