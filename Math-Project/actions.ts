"use server"
import solveLinearEquation from "@/main/solveLinearEquation"
import solveQuadraticEquation from "@/main/solveQuadraticEquation"
import solveEquationInTwoVariables from "@/main/solveEquationInTwoVariables"
export const solveEquation = async (equation:[string,string], equationType:string) => {
    if (equationType=="Linear Equations") {
        return solveLinearEquation(equation[0].replaceAll("𝒙","x"));
    } else if (equationType=="Quadratic Equations") {
        return solveQuadraticEquation(equation[0].replaceAll("𝒙","x"));
    } else {
        return solveEquationInTwoVariables([equation[0].replaceAll("𝒙","x").replaceAll("𝑦","y"),equation[1].replaceAll("𝒙","x").replaceAll("𝑦","y")])
    }
}