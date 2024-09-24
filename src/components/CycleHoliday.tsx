import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "NewYear"
    | "Valentine"
    | "Independence"
    | "Halloween"
    | "Christmas";

const ALPHABETICAL_ORDER: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "Independence",
    Independence: "NewYear",
    NewYear: "Valentine",
    Valentine: "Christmas",
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    NewYear: "Valentine",
    Valentine: "Independence",
    Independence: "Halloween",
    Halloween: "Christmas",
    Christmas: "NewYear",
};

const HOLIDAY_EMOJI: Record<Holiday, string> = {
    NewYear: "🎉",
    Valentine: "❤️",
    Independence: "🎆",
    Halloween: "🎃",
    Christmas: "🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("NewYear");
    const advanceAlphabetically = () => {
        setCurrentHoliday(ALPHABETICAL_ORDER[currentHoliday]);
    };
    const advanceByYear = () => {
        setCurrentHoliday(YEAR_ORDER[currentHoliday]);
    };

    return (
        <div>
            <div>Holiday: {HOLIDAY_EMOJI[currentHoliday]}</div>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
