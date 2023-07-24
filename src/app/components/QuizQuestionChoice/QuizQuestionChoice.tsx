interface QuizQuestionChoiceProps {
    text: string,
    isExampleCard? : boolean
}

export const QuizQuestionChoice = ({ text, isExampleCard } : QuizQuestionChoiceProps) => {
    return (
        <div className={
                isExampleCard ? 
                    "text-xs px-2 py-1 bg-gray-100 rounded" :
                    "text-xs px-8 py-4 bg-gray-100 rounded"}>
            { text }
        </div>
    )
}