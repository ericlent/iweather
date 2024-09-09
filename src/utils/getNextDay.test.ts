import { getNextDays } from "./getNextDays";

it("should return the next five days", () => {
    const days = getNextDays();
    console.log(days);
    
    expect(days).toHaveLength(5);
});