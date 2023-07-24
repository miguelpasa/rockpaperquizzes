import React from "react"
import { QuizCountdown } from "../QuizCountdown/QuizCountdown"
import { ActualQuizSheesh } from "../ActualQuizSheesh/ActualQuizSheesh"

interface QuizContainerProps {

}

export const QuizContainer = ({} : QuizContainerProps) => {
    const [isCountdownShowing, setCountdownShowing] = React.useState<boolean>(true)
    const [questionList, setQuestionList] = React.useState<any>()

    const hideCountdown = (questionList : any) => {
        setCountdownShowing(false)
        setQuestionList(questionList)
    }
    
    if(isCountdownShowing) {
        return (
            <QuizCountdown
                startingNumber={3}
                countdownFinished={(questions : any) => hideCountdown(questions)}/>
        )
    } else {
        return (
            <ActualQuizSheesh questions={questionList ? questionList : null}/>
        )
    }
}