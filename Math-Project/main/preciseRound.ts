/**
 * Rounds a number while correcting floating-point precision errors.
 * 
 * @param num - The number to round.
 * @returns The rounded number.
 */
const preciseRound = (num: number): number => {
    return Math.abs(num) < 1e-13 ? 0 : Math.round(num * 1e13) / 1e13;
};
export default preciseRound;