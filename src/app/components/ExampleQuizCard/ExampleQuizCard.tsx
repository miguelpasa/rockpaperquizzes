import { QuizQuestionChoice } from "../QuizQuestionChoice/QuizQuestionChoice"
import { QuizQuestionIndicator } from "../QuizQuestionIndicator/QuizQuestionIndicator"
import { TimerBar } from "../TimerBar/TimerBar"

interface ExampleQuizCardProps {

}

export const ExampleQuizCard = ({} : ExampleQuizCardProps) => {
    return (
        <div className="py-2 my-1 rounded-lg h-56 w-44 bg-gray-200 flex flex-col items-center text-center">
            <QuizQuestionIndicator amount={10} isExampleCard/>
            <div className="text-xs px-4 pt-4 text-center">
                Who, in 1903, was the first woman to win a Nobel Prize?
            </div>
            <div className="flex flex-col gap-y-1 mt-1">
                <QuizQuestionChoice text="Amelia Earhart" isExampleCard/>
                <QuizQuestionChoice text="Marie Curie" isExampleCard/>
                <QuizQuestionChoice text="Rosa Parks" isExampleCard/>
                <QuizQuestionChoice text="Jane Goodall" isExampleCard/>
            </div>
            <TimerBar progress={33} isExampleCard/>
        </div>
    )
}