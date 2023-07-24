'use client'
import useOnScreen from "@/app/helpers/useOnScreen";
import React from "react";

interface QuizCountdownProps {
    startingNumber: number,
    countdownFinished: Function
}

export const QuizCountdown = ({ startingNumber, countdownFinished } : QuizCountdownProps) => {
    const [currentCountdownNumber, setCurrentCountdownNumber] = React.useState<number>(startingNumber);     
    const [questionList, setQuestionList] = React.useState<any>();
    const intervalRef = React.useRef<number>()

    React.useEffect(() => {
        //TODO optimise this - currently replaces intervalRef every second
        if(intervalRef.current)  clearInterval(intervalRef.current)
        intervalRef.current = window.setInterval(() => {
            if(currentCountdownNumber <= 1) {
                clearInterval(intervalRef.current);
                countdownFinished(questionList ? questionList : null)
            } else {
                setCurrentCountdownNumber(currentCountdownNumber - 1)
            }
        }, 1000)
    }, [currentCountdownNumber])

    React.useEffect(() => {
        const tryApi = async () => {
            const response = await fetch("https://the-trivia-api.com/v2/questions?limit=10")
            .then((response) => {
                return response.json()
            }).then((data) => {
                setQuestionList(data)
            });
        }
        tryApi()
    }, [])


    let classes = ""
    if(currentCountdownNumber === 3) {
        classes += "text-pink-900"
    } else if (currentCountdownNumber === 2) {
        classes += "text-purple-800"
    } else if (currentCountdownNumber === 1) {
        classes += "text-blue-600"
    }

    return (
        <div className={"flex-1 pt-48 " + classes}>
            { currentCountdownNumber > 0 ? currentCountdownNumber : "" }
        </div>
    )
}