import handleVariableFraction from "./handleVariableFraction";
import multiplyTwoTerms from "./multiplyTwoTerms";

/**
 * Sorts the terms from the left-hand side (LHS) and right-hand side (RHS) of an equation.
 * The LHS terms containing 'x' are sorted and the constant terms from both sides are separated.
 * 
 * @param lhsTerms - An array of terms from the left-hand side of the equation.
 * @param rhsTerms - An array of terms from the right-hand side of the equation.
 * @returns An array containing two arrays: the sorted LHS terms and the sorted RHS terms.
 */
const sortTerms = (lhsTerms: string[], rhsTerms: string[]): [string[], string[]] => {
    const sortedLhsTerms: string[] = [];
    const sortedRhsTerms: string[] = [];
    for (let term of lhsTerms) {
        if (term.indexOf("x") === -1) {
            sortedRhsTerms.push(multiplyTwoTerms("-1",term))
        } else {
            if (term.indexOf("/") !== -1 && (term.split("/")[1].indexOf("x")!==-1)){
                return handleVariableFraction(lhsTerms,rhsTerms);
            } else {
                sortedLhsTerms.push(multiplyTwoTerms("1",term));
            }
        }
    }

    for (let term of rhsTerms) {
        if (term.indexOf("x") === -1) {
            sortedRhsTerms.push(multiplyTwoTerms("1",term))
        } else {
            if (term.indexOf("/") !== -1 && (term.split("/")[1].indexOf("x")!==-1)){
                return handleVariableFraction(lhsTerms,rhsTerms);
            } else {
                sortedLhsTerms.push(multiplyTwoTerms("-1",term));
            }
        }
    }
    return [sortedLhsTerms, sortedRhsTerms];
};

export default sortTerms