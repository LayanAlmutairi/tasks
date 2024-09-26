import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
////<h1> This is the header!</h1>
function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1> This is the header!</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Layan Almutairi Hello
                World
            </header>
            <h1>This is the header!</h1>
            <img
                src="C:\Users\layan\tasks\src\images\Milan.jpg"
                alt="A picture of my cat Milan"
            />
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            ; Best Players:
            <ul>
                <li> Cristiano Ronaldo</li>
                <li> Otávio Monteiro</li>
                <li> Anderson Talisca</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "25%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "25%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
