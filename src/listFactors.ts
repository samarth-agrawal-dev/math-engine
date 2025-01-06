/**
 * Finds all the factors of a given positive integer.
 * 
 * @param num - The number for which to find the factors. Must be a positive integer.
 * @returns An array containing all factors of the number, sorted in ascending order.
 * @throws An error if the input is not a positive integer.
 */
const listFactors = (num: number): number[] => {
    if (num <= 0) {
        throw new Error("Number must be a positive integer.");
    }

    const factors: number[] = [];
    const sqrtNum = Math.sqrt(num);
    for (let i = 1; i <= sqrtNum; i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }

    return factors.sort((a, b) => a - b);
};


export default listFactors;