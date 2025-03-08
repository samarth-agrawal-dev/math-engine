import calcFactorial from "./calcFactorial";
import preciseRound from "./preciseRound";
/**
 * Calculates the sine of an angle given in degrees.
 * @param degrees - The angle in degrees.
 * @returns The sine of the given angle.
 */
function calcSine(degrees: number): number {
    let radians = degrees * (Math.PI / 180);
    let answer = radians;
    for (let i=1;i<=8;i++) {
        const power = (2*i) + 1;
        if (i%2!==0){
            answer = answer - ((radians**power)/calcFactorial(power));
        }
        else {
            answer = answer + ((radians**power)/calcFactorial(power));
        }
    }
    return preciseRound(answer);
}

export default calcSine;