import { getSecondsLeftOfYear, getTimeString, getMinutesLeftOfYear } from "./clock";

test('getTimeString formats time string correctly', () => {
    const now = new Date(0, 0, 0, 10, 20, 30);
    const timeString = getTimeString(now);
    expect(timeString).toBe('10.20.30');
});

test('getSecondsLeftOfYear returns the correct amount of seconds', () => {
    const now = new Date("2022-12-31T23:00:00.000Z");
    const timeString = getSecondsLeftOfYear(now);
    expect(timeString).toBe(3600);
});

// New test for getMinutesLeftOfYear
test('getMinutesLeftOfYear returns the correct amount of minutes with two decimal precision', () => {
    const now = new Date("2022-12-31T23:00:00.000Z"); // 1 hour left in the year
    const minutesLeft = getMinutesLeftOfYear(now);
    expect(minutesLeft).toBe("60.00"); // 1 hour = 60 minutes
});

test('getMinutesLeftOfYear handles fractional minutes correctly', () => {
    const now = new Date("2022-12-31T23:59:30.000Z"); // 30 seconds left
    const minutesLeft = getMinutesLeftOfYear(now);
    expect(minutesLeft).toBe("0.50"); // 30 seconds = 0.5 minutes
});

// Other tests for getSecondsLeftOfYear and getMinutesLeftOfYear
test('getSecondsLeftOfYear returns the correct amount of seconds', () => {
    const now = new Date("2022-12-31T23:00:00.000Z");
    const secondsLeft = getSecondsLeftOfYear(now);
    expect(secondsLeft).toBe(3600);
});

test('getMinutesLeftOfYear returns the correct amount of minutes with two decimal precision', () => {
    const now = new Date("2022-12-31T23:00:00.000Z");
    const minutesLeft = getMinutesLeftOfYear(now);
    expect(minutesLeft).toBe("60.00");
});

test('getMinutesLeftOfYear handles fractional minutes correctly', () => {
    const now = new Date("2022-12-31T23:59:30.000Z");
    const minutesLeft = getMinutesLeftOfYear(now);
    expect(minutesLeft).toBe("0.50");
});