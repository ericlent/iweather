import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherAPIResponseProps", () => {
    it("should return weather api data formatted", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

        const response = await getWeatherByCityService({ latitude: 123, longitude: 456 });
        expect(response).toHaveProperty("today");
    })
});