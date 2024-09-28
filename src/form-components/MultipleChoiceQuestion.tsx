import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [option, setOption] = useState<string>(options[0]);

    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="correctOption">
                <Form.Label>Choose an answer: </Form.Label>
                <Form.Select value={option} onChange={updateOption}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>The user is {option === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
    // return (
    //     <div>
    //         <h3>Multiple Choice Question</h3>
    //     </div>
    // );
}
