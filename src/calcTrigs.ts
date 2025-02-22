import calcSine from "./calcSine";
/**
 * Calculates all the trignometric functions (sine, cosine, tangent, cosecant, secant, cotangent) of an angle given in degrees.
 * @param degrees - The angle in degrees.
 * @returns An object containing all six functions.
 */
function calcTrigs(degrees: number) {
    const sine = calcSine(degrees);
    const cosine = calcSine(90-degrees);
    const tangent = cosine === 0 ? "Not Defined." : sine/cosine
    const cosecant = sine === 0 ? "Not Defined." : 1/sine
    const secant = cosine === 0 ? "Not Defined." : 1/cosine
    const cotangent = sine === 0 ? "Not Defined." : cosine/sine
    return {
        sine,
        cosine,
        tangent,
        cosecant,
        secant,
        cotangent
    }
}

export default calcTrigs;