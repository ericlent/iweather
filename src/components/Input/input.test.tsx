import { render, screen } from "@testing-library/react-native";
import { Input } from "@components/Input";

describe("Component: Input", () => {
    it("should render without activity indicator if isLoading is undefined", () => {
        /*const { debug } = render(<Input />);
        debug();*/

        render(<Input />);

        const activityIndicator = screen.queryByTestId("activity-indicator");
        expect(activityIndicator).toBeNull();
    });

    it("should render without activity indicator if isLoading prop is true", () => {
        render(<Input isLoading />);

        const activityIndicator = screen.getByTestId("activity-indicator");
        expect(activityIndicator).toBeTruthy();
    });
});