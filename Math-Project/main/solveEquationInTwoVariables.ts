import addTwoFractions from "./addTwoFractions";
import extractTerms from "./extractTerms";
import fractionToNumber from "./fractionToNumber";
import multiplyByFraction from "./multiplyByFractions";
import multiplyTwoTerms from "./multiplyTwoTerms";
import solveLinearEquation from "./solveLinearEquation";
import solveQuadraticEquation from "./solveQuadraticEquation";

const solveEquationInTwoVariables = (equations: [string, string]) => {
    if (equations.length !== 2) throw new Error("Invalid Equation Arguments. Expected 2 equations (string) inside an array.");
    let equationConstansts:string[][]=[];
    for (let equation of equations) {
        if (equation.indexOf("x") == -1) {
            throw new Error("Incorrect Equation Arguments. Equation should contain variable 'x'.");
        }
        if (equation.indexOf("y") == -1) {
            throw new Error("Incorrect Equation Arguments. Equation should contain variable 'y'.");
        }
        if (equation.split("=").length !== 2) {
            throw new Error("Incorrect Equation Argument. There can only be 1 '=' sign.");
        }
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
        if (typeof lhsTerms === "number" || typeof rhsTerms === "number") throw new Error("Incorrect Equation Argument. Brackets should be closed.");
        for (let term of rhsTerms) {
            lhsTerms.push(multiplyTwoTerms("-1", term));
        }
        for (let term of lhsTerms) {
            if (typeof term == "number") throw new Error("Incorrect Equation Argument.");
            if (term.indexOf("^2") !== -1) {
                throw new Error("Quadratic equation was given instead of linear equation.");
            }
        }
        let a: string = "0/1";
        let b: string = "0/1";
        let c: string = "0/1";

        for (let term of lhsTerms) {
            if (term.split("/").length==1) {
                term=term+"/1"
            }
            if (term.indexOf("x") !== -1) {
                a = addTwoFractions(multiplyTwoTerms("1", term).replace("x", "").replace("y",""),a);
            } else if (term.indexOf("y") !== -1) {
                b = addTwoFractions(multiplyTwoTerms("1", term).replace("y", "").replace("x",""),b);
            } else {
                c = addTwoFractions(multiplyTwoTerms("1", term),c);
            }
        }
        equationConstansts.push([a,b,c]);
    };
    const constantsQuotients:number[]=[];
    for (let i=0;i<3;i++) {
        constantsQuotients.push(fractionToNumber(equationConstansts[0][i])/fractionToNumber(equationConstansts[1][i]));
    }
    if (constantsQuotients[0]===constantsQuotients[1] && constantsQuotients[1]===constantsQuotients[2]) throw new Error("Infinite possible solutions for this pair of equations.");
    else if (constantsQuotients[0]===constantsQuotients[1] && constantsQuotients[1]!==constantsQuotients[2]) throw new Error("No possible solutions for this pair of equations.");
    else {
        if (equations[0].indexOf("xy")!==-1) {
            const y:string=`${multiplyTwoTerms("-1",equationConstansts[1][2])}+${multiplyTwoTerms("-1",equationConstansts[1][0])}x`;
            const xEquation = equations[0].replace("y",`(${y})`);
            const xSolutions = solveQuadraticEquation(xEquation);
            return xSolutions;
        }
        const yInSecondEquation = `${multiplyByFraction(multiplyTwoTerms("-1",equationConstansts[1][2]),`${equationConstansts[1][1].split("/")[1]}/${equationConstansts[1][1].split("/")[0]}`)}+(${multiplyByFraction(multiplyTwoTerms("-1",equationConstansts[1][0]),`${equationConstansts[1][1].split("/")[1]}/${equationConstansts[1][1].split("/")[0]}`)})x`;
        const xEquation = equations[0].replace(/y/g,`(${yInSecondEquation})`);
        const xSolution = solveLinearEquation(xEquation);
        const ySolution = solveLinearEquation(equations[0].replace(/x/g,`(${xSolution})`).replace(/y/g,"x"));
        return [xSolution,ySolution];
    }
}
export default solveEquationInTwoVariables;