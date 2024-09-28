import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function seeanswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="CheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={seeanswer} />
            </Form.Group>
            <div>The user is {answer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );

    // return (

    //     // <div>
    //     //     <h3>Check Answer</h3>
    //     // </div>
    // );
}
