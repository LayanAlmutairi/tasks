import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);
    const AnswerVisibility = () => {
        setReveal(!reveal);
    };
    return (
        <div>
            <Button onClick={AnswerVisibility}>
                {reveal ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {reveal && <p>The answer is 42</p>}
        </div>
    );
}
