import findHCF from "./findHCF";
const findRepeatingPart = (decimal:string) => {
    const maxRepititions = 20;
    for (let i=0;i<decimal.length;i++) {
        const char=decimal[i]
    }
}
/**
 * Converts a decimal (up to 10 places) to its fractional form.
 * Handles non-terminating decimals by approximating.
 * Detects recurring decimals for simplified fractions.
 * 
 * @param decimal - The decimal number to be converted.
 * @returns A string representing the fraction in the form "numerator/denominator".
 */
function decimalToFraction(decimal: number): string {
    if (typeof decimal !== "number" || isNaN(decimal)) {
        throw new Error("Input must be a valid number.");
    }
    let decimalStr = decimal.toString();
    let minusSign:string="";
    if (decimalStr[0]=="-") {
        decimalStr=decimalStr.slice(1);
        minusSign="-";
    }
    if (decimalStr.indexOf(".")!==-1) {
        const [integerPart, fractionalPart] = decimalStr.split(".");
        const match = fractionalPart.match(/(\d+?)\1+$/); // Detect a repeating sequence at the end
        if (match) {
            const repeatingSequence = match[1];
            const repeatLength = repeatingSequence.length;

            const nonRepeatingLength = fractionalPart.length - repeatLength;
            const nonRepeatingPart = fractionalPart.slice(0, nonRepeatingLength);
            const denominator =
                Math.pow(10, fractionalPart.length) -
                Math.pow(10, nonRepeatingLength);
            const numerator =(
                parseInt(nonRepeatingPart || "0") * Math.pow(10, repeatLength) +
                parseInt(repeatingSequence) -
                parseInt(nonRepeatingPart || "0"));
            const divisor = findHCF([numerator, denominator]);
            const finalDen = denominator/divisor;
            const finalNum = (numerator/divisor)+parseInt(integerPart)*finalDen;
            return `${minusSign}${finalNum}/${finalDen}`;
        }
    }

    // For non-recurring decimals, proceed as before
    if (decimal<0) {
        decimal=decimal*-1
    }
    const precision = 1e10; // Maximum precision for up to 10 decimal places
    const numerator = Math.round(decimal * precision);
    const denominator = precision;

    const divisor = findHCF([numerator, denominator]);

    const simplifiedNumerator = numerator / divisor;
    const simplifiedDenominator = denominator / divisor;

    return `${minusSign}${simplifiedNumerator}/${simplifiedDenominator}`;
}
export default decimalToFraction;