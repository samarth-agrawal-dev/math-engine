import addTwoFractions from "./addTwoFractions";
import decimalToFraction from "./decimalToFraction";
import extractTerms from "./extractTerms";
import fractionToNumber from "./fractionToNumber";
import handleVariableFraction from "./handleVariableFraction";
import multiplyTwoTerms from "./multiplyTwoTerms";
import simplifyFraction from "./simplifyFraction";
/**
 * Solves a quadratic equation of the form 'ax^2 + bx + c = 0' using the quadratic formula.
 * 
 * @param equation - The quadratic equation as a string in the form 'ax^2 + bx + c = 0'.
 * @returns A single solution if both roots are equal, otherwise an array of two solutions.
 * @throws An error if the equation format is incorrect, if the coefficient of x^2 is zero, or if the discriminant is negative (complex roots).
 */
const solveQuadraticEquation = (equation: string): string | string[] => {
    if (equation.split("=").length !== 2) {
        throw new Error("Incorrect Equation Argument. There can only be 1 '=' sign.");
    }
    
    equation = equation.replace(/\s/g, '');
    const regex = /^(\(?[+-]?\d*\*?x?[+-]?\d*\)?\/(\(x[+-]\d+\)))=(\(?[+-]?\d*\*?x?[+-]?\d*\)?\/(\(x[+-]\d+\)))$/;
    if (regex.test(equation)){
        const [lhsNum,lhsDen] = equation.split("=")[0].split("/");
        const [rhsNum,rhsDen] = equation.split("=")[1].split("/");
        equation=`(${lhsNum})(${rhsDen})=(${rhsNum})(${lhsDen})`;
    }
    const lhs: string = equation.split("=")[0];
    const rhs: string = equation.split("=")[1];

    if (!lhs) {
        throw new Error("Incorrect Equation Argument. LHS not provided");
    }
    if (!rhs) {
        throw new Error("Incorrect Equation Argument. RHS not provided");
    }
    let lhsTerms = extractTerms(lhs);
    let rhsTerms = extractTerms(rhs);
    if (typeof lhsTerms=="number" || typeof rhsTerms=="number") throw new Error("Invalid equation argument.");
    for (let term of lhsTerms) {
        if (term.indexOf("/") !== -1 && (term.split("/")[1].indexOf("x")!==-1)){
            const result=handleVariableFraction(lhsTerms,rhsTerms);
            lhsTerms=result[0];
            rhsTerms=result[1];
        }
    }
    for (let term of rhsTerms) {
        if (term.indexOf("/") !== -1 && (term.split("/")[1].indexOf("x")!==-1)){
            const result=handleVariableFraction(lhsTerms,rhsTerms);
            lhsTerms=result[0];
            rhsTerms=result[1];
        }
    }
    for (let term of rhsTerms) {
        lhsTerms.push(multiplyTwoTerms("-1", term));
    }
    let a: string = "0/1";
    let b: string = "0/1";
    let c: string = "0/1";

    for (let term of lhsTerms) {
        if (term.split("/").length==1) {
            term=term+"/1"
        }
        if (term.indexOf("x^2") !== -1) {
            a = addTwoFractions(multiplyTwoTerms("1", term).replace("x^2", ""),a);
        } else if (term.indexOf("x") !== -1) {
            b = addTwoFractions(multiplyTwoTerms("1", term).replace("x", ""),b);
        } else {
            c = addTwoFractions(multiplyTwoTerms("1", term),c);
        }
    }
    if (a === "0/1") {
        throw new Error("Coefficient of x^2 can not be 0.");
    }
    const discriminant = addTwoFractions(multiplyTwoTerms(b,b),multiplyTwoTerms("-1",multiplyTwoTerms("4",multiplyTwoTerms(a,c))));
    if (fractionToNumber(discriminant) < 0) throw new Error("Complex roots: discriminant is negative.");
    let discriminantRoot = Math.sqrt(fractionToNumber(discriminant)).toString();
    if (discriminantRoot.split(".")[1] && discriminantRoot.split(".")[1].length>14) discriminantRoot = discriminantRoot.split(".")[0] + discriminantRoot.split(".")[1].slice(0,discriminantRoot.length-1);
    let solution1:string = simplifyFraction(`${fractionToNumber(addTwoFractions(multiplyTwoTerms("-1",b),decimalToFraction(parseFloat(discriminantRoot))))} / ${fractionToNumber(multiplyTwoTerms("2", a))}`);
    let solution2:string = simplifyFraction(`${fractionToNumber(addTwoFractions(multiplyTwoTerms("-1",b),decimalToFraction(-1*parseFloat(discriminantRoot))))} / ${fractionToNumber(multiplyTwoTerms("2", a))}`);
    if (solution1.length>10) solution1 = `${Math.round(fractionToNumber(solution1)*10000)/10000}`;
    if (solution2.length>10) solution2 = `${Math.round(fractionToNumber(solution2)*10000)/10000}`;
    if (solution1 === solution2) return solution1;
    return [solution1, solution2];
};

export default solveQuadraticEquation;