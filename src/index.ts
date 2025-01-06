import decimalToFraction from "./decimalToFraction"
import extractTerms from "./extractTerms"
import findHCF from "./findHCF"
import findLCM from "./findLCM"
import addTwoFractions from "./addTwoFractions"
import fractionToNumber from "./fractionToNumber"
import listFactors from "./listFactors"
import multiplyTwoTerms from "./multiplyTwoTerms"
import solveLinearEquation from "./solveLinearEquation"
import solveQuadraticEquation from "./solveQuadraticEquation"
import solveEquationInTwoVariables from "./solveEquationInTwoVariables"
import middleTermSplit from "./middleTermSplit"
/**
 * Class for solving advanced mathematical operations such as linear equations, quadratic equations,
 * finding HCF, LCM, and listing factors.
 */
class AdvancedMath {
    solveLinearEquation = solveLinearEquation;
    solveQuadraticEquation = solveQuadraticEquation;
    solveEquationsInTwoVariables = solveEquationInTwoVariables
    findHCF = findHCF;
    findLCM = findLCM;
    listFactors = listFactors;
    multiplyTwoTerms = multiplyTwoTerms;
    extractTerms = extractTerms;
    fractionToNumber = fractionToNumber;
    decimalToFraction = decimalToFraction;
    addTwoFractions = addTwoFractions;
    middleTermSplit = middleTermSplit;
}

// console.log(new AdvancedMath().solveLinearEquation("2(5+3(2x-8))=72")); // should return "55/6"
// console.log(new AdvancedMath().solveQuadraticEquation("x^2+8x+16=0")); // should return "-4"
// console.log(new AdvancedMath().solveQuadraticEquation("150=3x(15-x)")); // should return [ "10", "5" ]
// console.log(new AdvancedMath().solveQuadraticEquation("(x-3)(x+3)=0")); // should return [ "3", "-3" ]
// console.log(new AdvancedMath().solveQuadraticEquation("x+1/x=61/30")); // should return [ "6/5", "5/6" ]
// console.log(new AdvancedMath().solveEquationsInTwoVariables(["x+y=6","2x+y=5"])); // should return [ '-1', '7' ]
// console.log(new AdvancedMath().solveEquationsInTwoVariables(["(3x + 4y)/5 + (2x - 3y)/2 = 12", "(x - y)/3 + (x + y)/4 = 4"])); // should return [ '72/11', '-24/11' ]
// console.log(new AdvancedMath().findHCF([12,48,30])); // should return 6
// console.log(new AdvancedMath().findLCM([2,3,4,5,6])); // should return 60
// console.log(new AdvancedMath().listFactors(36)); // should return [ 1, 2, 3, 4, 6, 9, 12, 18, 36 ]
// console.log(new AdvancedMath().multiplyTwoTerms("5x^2","-1/5")); // should return "-1x^2/1"
// console.log(new AdvancedMath().extractTerms("4x^2+3x+(2x-8)(34)")); // should return [ '4x^2', '3x', '68x', '-272' ]
// console.log(new AdvancedMath().fractionToNumber("-1/3")); // should return "-0.33333333333"
// console.log(new AdvancedMath().decimalToFraction(5.6)) // should return "28/5"
// console.log(new AdvancedMath().decimalToFraction(0.13121212)) // should return "433/3300"
// console.log(new AdvancedMath().middleTermSplit("x^2","1x","-6")) // should return [ -2, 3 ]