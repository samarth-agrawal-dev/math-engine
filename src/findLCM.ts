/**
 * Finds the Least Common Multiple (LCM) of an array of numbers.
 * 
 * @param numbers - An array of integers for which the LCM is to be calculated. Must contain at least one number.
 * @returns The LCM of the input numbers.
 * @throws An error if the array is empty.
 */
const findLCM = (numbers: number[]): number => {
    if (numbers.length === 0) {
        throw new Error("Array must contain at least one number");
    }
    const hcf = (a: number, b: number): number => {
        return b === 0 ? a : hcf(b, a % b);
    };
    const lcm = (a: number, b: number): number => {
        return Math.abs(a * b) / hcf(a, b);
    };
    return numbers.reduce((acc, num) => lcm(acc, num));
}
export default findLCM;