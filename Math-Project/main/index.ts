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
import calcFactorial from "./calcFactorial"
import calcSine from "./calcSine"
import calcTrigs from "./calcTrigs"
import radianToDegree from "./radianToDegree"
import degreeToRadian from "./degreeToRadian"
import preciseRound from "./preciseRound"

/**
 * Class for solving advanced mathematical operations such as finding HCF, LCM, and listing factors.
 */
class AdvancedMath {
    findHCF = findHCF;
    findLCM = findLCM;
    listFactors = listFactors;
    fractionToNumber = fractionToNumber;
    decimalToFraction = decimalToFraction;
    addTwoFractions = addTwoFractions;
    calcFactorial = calcFactorial;
    multiplyTwoTerms = multiplyTwoTerms;
    preciseRound = preciseRound;
}

/**
 * Class for solving advanced algebraic operations such as solving linear equations, quadratic equations, pair of linear equations in two variables, middle term splitting etc.
 */
class Algebra extends AdvancedMath {
    solveLinearEquation = solveLinearEquation;
    solveQuadraticEquation = solveQuadraticEquation;
    solveEquationsInTwoVariables = solveEquationInTwoVariables;
    middleTermSplit = middleTermSplit;
    extractTerms = extractTerms;
}

/**
 * Class for solving advanced trignometric operations such as finding sin, cos, tan, sec, csc & cot. It can also be used for converting degrees to radians and vice versa.
 */
class Trignometry extends AdvancedMath {
    calcSine = calcSine;
    calcTrigs = calcTrigs;
    degreeToRadian = degreeToRadian;
    radianToDegree = radianToDegree;
}
// const AdvMath = new AdvancedMath();
// const Algeb = new Algebra();
// const Trig = new Trignometry();
// console.log(AdvMath.calcFactorial(6)); // should return 720
// console.log(AdvMath.preciseRound(0.49999999999999994)); // should return 0.5
// console.log(AdvMath.findHCF([12,48,30])); // should return 6
// console.log(AdvMath.findLCM([2,3,4,5,6])); // should return 60
// console.log(AdvMath.listFactors(36)); // should return [ 1, 2, 3, 4, 6, 9, 12, 18, 36 ]
// console.log(AdvMath.fractionToNumber("-1/3")); // should return "-0.33333333333"
// console.log(AdvMath.decimalToFraction(5.6)); // should return "28/5"
// console.log(AdvMath.decimalToFraction(0.13121212)); // should return "433/3300"
// console.log(AdvMath.multiplyTwoTerms("5x^2","-1/5")); // should return "-1x^2/1"
// console.log(Algeb.solveLinearEquation("2(5+3(2x-8))=72")); // should return "55/6"
// console.log(Algeb.solveQuadraticEquation("x^2+8x+16=0")); // should return "-4"
// console.log(Algeb.solveQuadraticEquation("150=3x(15-x)")); // should return [ "10", "5" ]
// console.log(Algeb.solveQuadraticEquation("(x-3)(x+3)=0")); // should return [ "3", "-3" ]
// console.log(Algeb.solveQuadraticEquation("x+1/x=61/30")); // should return [ "6/5", "5/6" ]
// console.log(Algeb.solveEquationsInTwoVariables(["x+y=6","2x+y=5"])); // should return [ '-1', '7' ]
// console.log(Algeb.solveEquationsInTwoVariables(["(3x + 4y)/5 + (2x - 3y)/2 = 12", "(x - y)/3 + (x + y)/4 = 4"])); // should return [ '72/11', '-24/11' ]
// console.log(Algeb.extractTerms("4x^2+3x+(2x-8)(34)")); // should return [ '4x^2', '3x', '68x', '-272' ]
// console.log(Algeb.middleTermSplit("x^2","1x","-6")); // should return [ -2, 3 ]
// console.log(Trig.calcSine(45)); // should return 0.7071067811865475
// console.log(Trig.calcTrigs(90)); // { sine: 1, cosine: 0, tangent: 'Not Defined.', cosecant: 1, secant: 'Not Defined.', cotangent: 0}
// console.log(Trig.degreeToRadian(150)); // should return { inTermsOfPi: '5π/6', approxValue: 2.6179938779914944 }
// console.log(Trig.radianToDegree(5*Math.PI/6)); // should return 150

export {AdvancedMath,Trignometry,Algebra}