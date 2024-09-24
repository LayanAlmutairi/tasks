import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questiontype, setType] = useState<QuestionType>(
        "short_answer_question",
    );
    const QuestionType = () => {
        setType((prevType) =>
            prevType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };
    return (
        <div>
            <Button onClick={QuestionType}>Change Type</Button>
            <p>
                {questiontype === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </p>
        </div>
    );
}
