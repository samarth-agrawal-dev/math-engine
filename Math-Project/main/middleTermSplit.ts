import multiplyTwoTerms from "./multiplyTwoTerms";
import solveEquationInTwoVariables from "./solveEquationInTwoVariables";

/**
 * Extracts terms from a given quadratic equation's terms, the two middle terms required for middle-term splitting.
 * 
 * @param xSquaredTerm- The quadratic equation's first term as a string that contains x^2.
 * @param xTerm- The quadratic equation's second term as a string that contains x.
 * @param constantTerm- The quadratic equation's third term as a string that contains a number.
 * @returns An array containing the two splits of the middle-term.
 */
const middleTermSplit = (xSquaredTerm:string,xTerm:string,constantTerm:string) => {
    let xSVal = xSquaredTerm.replace("x^2","");
    if (xSVal=="") xSVal="1";
    return solveEquationInTwoVariables([`xy=${multiplyTwoTerms(xSVal,constantTerm)}`,`x+y=${xTerm.replace("x","")}`])
}
export default middleTermSplit;