/**
 * Calculates the factorial of a given number recursively.
 * 
 * @param num - The number to calculate the factorial.
 * @throws Error if the number is negative.
 * @returns The factorial of the given number.
 */
const calcFactorial = (num : number) : number => {
    if (num<0) throw new Error("Negative numbers don't have a factorial.");
    if (num==0) return 1;
    return num * calcFactorial(num-1);
};
export default calcFactorial;