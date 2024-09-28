import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const gainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </Button>
            <Button onClick={gainAttempts} className="">
                Gain
            </Button>
        </div>
    );
}
