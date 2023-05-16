interface RockPapperQuizzesTitleProps {

};

export const RockPapperQuizzesTitle = ({} : RockPapperQuizzesTitleProps) => {
    return (
        <div className="h-6">
            <span className="text-gray-700">
                rock
            </span>
            <span className="text-yellow-600">
                paper
            </span>
            <span className="text-green-700">
                quizzes
            </span>
        </div>
    )
}