import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [Attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    const StartQuiz = () => {
        if (Attempt > 0) {
            setProgress(true);
            setAttempt(Attempt - 1);
        }
    };
    const StopQuiz = () => {
        setProgress(false);
    };
    const Mulligan = () => {
        setAttempt(Attempt + 1);
    };

    return (
        <div>
            <div>Attempts left: {Attempt}</div>
            <Button onClick={StartQuiz} disabled={progress || Attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={StopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={Mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
