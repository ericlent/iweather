import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
    it("should render day", () => {
        //const { debug } =
        render(
            <Day
                data={{
                    day: "10/09",
                    min: "15°C",
                    max: "20°C",
                    icon: clearDay,
                    weather: "Céu limpo"
                }}
            />
        );

        //debug();

        expect(screen.getByText("10/09")).toBeTruthy();
    });
});