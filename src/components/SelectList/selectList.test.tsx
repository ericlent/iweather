import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
    it("should return city details selected.", () => {
        const data = [
            { id: "1", name: "Campinas", longitude: 456, latitude: 123 },
            { id: "2", name: "São Paulo", longitude: 987, latitude: 789 }
        ];

        const onPress = jest.fn();

        render(
            <SelectList
                data={data}
                onChange={() => { }}
                onPress={onPress}
            />
        )

        // Barra (/) para procurar o texto em qualquer lugar
        // i para ignorar case sensitive
        const selectedCity = screen.getByText(/São Paulo/i);
        //const selectedCity = screen.getByText("São Paulo", { exact: false });

        //Event de pressionar
        fireEvent.press(selectedCity);

        //Verifica a quantidade vezes que a função foi chamada
        //expect(onPress).toHaveBeenCalledTimes(1);

        //Verifica se a função foi chamada com o retorno correto
        expect(onPress).toHaveBeenCalledWith(data[1]);

    });

    it("should not show options when data is empty.", () => {
        render(
            <SelectList
                data={[]}
                onChange={() => { }}
                onPress={() => { }}
            />
        )

        const options = screen.getByTestId("options");
        expect(options.children).toHaveLength(0);
    });
})
