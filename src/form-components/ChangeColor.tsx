import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "gray",
        "black",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorOption: string) => (
                <Form.Check
                    key={colorOption}
                    inline
                    type="radio"
                    label={colorOption}
                    name="colors"
                    value={colorOption}
                    checked={color === colorOption}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                    style={{ backgroundColor: colorOption, color: "white" }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    backgroundColor: color,
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
