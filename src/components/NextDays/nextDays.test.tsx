import { render, screen } from "@testing-library/react-native";

import clearDay from "@assets/clear_day.svg";
import { NextDays } from "@components/NextDays";

describe("Component: NextDay", () => {
    it("should render day", () => {
        render(
            <NextDays
                data={[
                    { day: "10/09", min: "18°C", max: "26°C", icon: clearDay, weather: "Céu limpo" },
                    { day: "11/09", min: "12°C", max: "23°C", icon: clearDay, weather: "Nublado" },
                    { day: "12/09", min: "11°C", max: "20°C", icon: clearDay, weather: "Chuva forte" },
                    { day: "13/09", min: "14°C", max: "22°C", icon: clearDay, weather: "Chuva fraca" },
                    { day: "14/09", min: "12°C", max: "21°C", icon: clearDay, weather: "Chuva forte" },
                ]}
            />
        );

        expect(screen.getByText("13/09")).toBeTruthy();
    });
});