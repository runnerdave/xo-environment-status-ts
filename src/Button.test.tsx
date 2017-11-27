import {calculateDurationInSeconds} from './Button';

it('returns 60 seconds', () => {
    const date1 = new Date(2017, 12, 1, 12, 0, 0);
    const date2 = new Date(2017, 12, 1, 12, 1, 0);
    expect(calculateDurationInSeconds(date2, date1)).toBe(60);
});

it('returns 90 seconds', () => {
    const date1 = new Date(2017, 12, 1, 12, 0, 0);
    const date2 = new Date(2017, 12, 1, 12, 1, 30);
    expect(calculateDurationInSeconds(date2, date1)).toBe(90);
});