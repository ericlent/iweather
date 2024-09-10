import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";


const newCity: CityProps = {
    id: "1",
    name: "São Paulo",
    longitude: 123,
    latitude: 456,
};

describe("Storage: CityStorages", () => {
    it("should return null when don't have a city storaged", async () => {
        const response = await getStorageCity();
        expect(response).toBeNull();
    });

    it("should return city storaged", async () => {

        await saveStorageCity(newCity);
        const response = await getStorageCity();

        expect(response).toEqual(newCity);
    });

    it("should remove city storaged", async () => {

        await saveStorageCity(newCity);

        await removeStorageCity();

        const response = await getStorageCity();
        expect(response).toBeNull();
    });
});