/**
 * Finds the Highest Common Factor (HCF) of an array of numbers.
 * 
 * @param numbers - An array of integers for which the HCF is to be calculated. Must contain at least one number.
 * @returns The HCF of the input numbers.
 * @throws An error if the array is empty.
 */
const findHCF = (numbers: number[]): number => {
    if (numbers.length === 0) {
        throw new Error("Array must contain at least one number");
    }

    const gcd = (a: number, b: number): number => {
        return b === 0 ? a : gcd(b, a % b);
    };

    return numbers.reduce((hcf, num) => gcd(hcf, num));
};

export default findHCF;