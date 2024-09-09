import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
    it("should return the next five days", () => {
        const days = getNextDays();
        console.log(days);

        //expect(days).toHaveLength(5);
        //expect(days.length).toEqual(5);
        expect(days.length).toBe(5);

    });
});