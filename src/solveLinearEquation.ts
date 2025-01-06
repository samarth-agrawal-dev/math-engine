import addTwoFractions from "./addTwoFractions";
import extractTerms from "./extractTerms";
import findHCF from "./findHCF";
import fractionToNumber from "./fractionToNumber";
import sortTerms from "./sortTerms";
/**
 * Solves a linear equation of the form 'ax + b = c'.
 * 
 * @param equation - The linear equation as a string which can be in the form 'ax + b = c', where 'a', 'b', and 'c' are numbers, and 'x' is the variable.
 * @returns The solution for the variable 'x'.
 * @throws An error if the equation is not in the correct format or is not a linear equation.
 */
const solveLinearEquation = (equation: string): string => {
    if (equation.indexOf("x")==-1){
        throw new Error("Incorrect Equation Argument. Equation should contain variable 'x'.")
    }
    if (equation.split("=").length !== 2) {
        throw new Error("Incorrect Equation Argument. There can only be 1 '=' sign.");
    }

    let solution:string|number = 0;
    equation = equation.replace(/\s/g, '');
    const lhs: string = equation.split("=")[0];
    const rhs: string = equation.split("=")[1];

    if (!lhs) {
        throw new Error("Incorrect Equation Argument. LHS not provided");
    }
    if (!rhs) {
        throw new Error("Incorrect Equation Argument. RHS not provided");
    }

    const lhsTerms = extractTerms(lhs);
    const rhsTerms = extractTerms(rhs);

    if (typeof lhsTerms==="number" || typeof rhsTerms==="number") throw new Error("Incorrect Equation Argument. Brackets should be closed.");

    const [sortedLhsTerms, sortedRhsTerms] = sortTerms(lhsTerms, rhsTerms);
    let lhsSum: string | number = "0/1";
    let rhsSum: string | number= "0/1";

    for (let term of sortedLhsTerms) {
        if (typeof term == "number") throw new Error("Incorrect Equation Argument.");
        if (term.indexOf("x^2") !== -1){
            throw new Error("Quadratic equation was given instead of linear equation.");
        }
        let numVal = (term.replace("x", ""));
        if (numVal.indexOf("/")==-1) {
            numVal=numVal+"/1"
        }
        if (numVal === "-") lhsSum=addTwoFractions("-1/1",lhsSum);
        else if (numVal === "") lhsSum=addTwoFractions("1/1",lhsSum);
        else lhsSum = addTwoFractions(numVal,lhsSum);
    }

    for (let term of sortedRhsTerms) {
        let numVal = (term);
        if (numVal.indexOf("/")==-1) {
            numVal=numVal+"/1";
        }
        rhsSum = addTwoFractions(numVal,rhsSum);
    }
    if (lhsSum == "0/1") throw new Error("Cannot divide by 0.");
    const [a,b] = lhsSum.split("/").map(Number);
    const [c,d] = rhsSum.split("/").map(Number);
    const den = a*d;
    const num = b*c;
    const hcf=findHCF([num,den]);
    if (den==hcf) return `${num/hcf}`
    solution = `${num/hcf}/${den/hcf}`;
    if (solution.length>10) return `${Math.round(fractionToNumber(solution)*10000)/10000}`;
    return solution;
};
export default solveLinearEquation;