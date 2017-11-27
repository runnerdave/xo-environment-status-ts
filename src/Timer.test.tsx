import Timer from './Timer';

it('returns seconds in hh:mm:ss format', () => {
    const oneHour: number = 3600;
    const oneHourAndAHalf: number = 3600*1.5;
    const twoHoursTen: number = 3600*2 + 600;
    const tenSeconds: number = 10;
    expect(Timer.toHHMMSS(oneHour)).toBe('01:00:00');
    expect(Timer.toHHMMSS(oneHourAndAHalf)).toBe('01:30:00');
    expect(Timer.toHHMMSS(twoHoursTen)).toBe('02:10:00');
    expect(Timer.toHHMMSS(tenSeconds)).toBe('00:00:10');
});