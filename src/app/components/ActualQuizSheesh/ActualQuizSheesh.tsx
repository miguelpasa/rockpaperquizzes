import React from "react"
import { QuizQuestionIndicator } from "../QuizQuestionIndicator/QuizQuestionIndicator"
import { QuizQuestionChoice } from "../QuizQuestionChoice/QuizQuestionChoice"
import { TimerBar } from "../TimerBar/TimerBar"

interface ActualQuizSheeshProps {
    questions: any
}

export const ActualQuizSheesh = ({ questions } : ActualQuizSheeshProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState<number>(0)
    const [timeProgress, setTimeProgress] = React.useState<number>(0)
    console.log(questions)
    return (
        <div className="h-96 flex flex-col items-center">
            <QuizQuestionIndicator amount={10}/>
            <div className="text-m px-4 mt-6 text-center">
                Who, in 1903, was the first woman to win a Nobel Prize?
            </div>
            <div className="flex flex-col gap-y-1 mt-6">
                <QuizQuestionChoice text="Amelia Earhart"/>
                <QuizQuestionChoice text="Marie Curie"/>
                <QuizQuestionChoice text="Rosa Parks"/>
                <QuizQuestionChoice text="Jane Goodall"/>
            </div>
            <TimerBar progress={33}/>
        </div>
    )
}