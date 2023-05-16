/* eslint-disable react/no-unescaped-entities */
'use client'
import { RockPapperQuizzesTitle } from "./components/RockPapperQuizzesTitle/RockPapperQuizzesTitle";
import { DynamicTextInput } from "./components/DynamicTextInput/DynamicTextInput";
import { PageCarousel } from "./components/PageCarousel/PageCarousel";
import { Footer } from "./components/Footer/Footer";
import React from "react";

export default function Home() {
    // TODO refactor name so it is part of a form onsubmit instead of rerender on every change
    const [name, setName] = React.useState<string>("");
    const score = React.useRef<HTMLDivElement>(null);

    const handleNameChange = (nameChangedTo : string) => {
        // TODO set name in browser (clear after 30 days of not playing)
        setName(nameChangedTo);
    }
    
    return (
        <main className="flex min-h-screen flex-col items-center gap-y-6 py-4">
            <RockPapperQuizzesTitle />
            <PageCarousel name={name}>
                <div className="min-h-96 text-center flex flex-col gap-y-8 p-4">
                    <div>
                        Welcome to
                        <RockPapperQuizzesTitle />
                    </div>
                    <div>
                        Are you a trivia master? Let's see!
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        What is your name?
                        <DynamicTextInput onchange={handleNameChange}/>
                    </div>
                    <div>
                        This name will be added to the leaderboards.
                    </div>
                </div>
                <div className="min-h-96 text-center">
                    <div className="font-bold mb-2">
                        How is it done?
                    </div>
                    <div>
                        10 seconds. 60 questions. 1 brain.
                    </div>
                    <div className="rounded-lg h-56 w-44 bg-gray-200">
                        fasd
                    </div>
                </div>
                <div className="min-h-96 text-center">
                    Your score was 
                    <div ref={score}>

                    </div>
                </div>
            </PageCarousel>

            <Footer />
        </main>
    );
}
