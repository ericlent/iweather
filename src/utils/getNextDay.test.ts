import { getNextDays } from "./getNextDays";

test("should return the next five days", () => {
    const days = getNextDays();
    console.log(days);
    
    expect(days).toHaveLength(5);
});