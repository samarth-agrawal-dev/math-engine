/**
 * Converts a fractional string (in the form 'numerator/denominator') to a decimal number.
 * 
 * @param fractionStr - The fractional string to be converted, e.g. "3/4" or "-1/2".
 * @returns The decimal representation of the fraction.
 * @throws An error if the denominator is zero.
 */
function fractionToNumber(fractionStr: string): number {
    let [numerator, denominator] = fractionStr.split('/').map(Number);
    if (fractionStr.split("/")[0] === "") numerator = 1;
    if (fractionStr.split("/")[0] === "-") numerator = -1;
    if (fractionStr.split("/")[1] === "") denominator = 1;
    if (fractionStr.split("/")[1] === "-") denominator = -1;
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return numerator / denominator;
}

export default fractionToNumber