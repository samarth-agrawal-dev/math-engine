import simplifyFraction from "./simplifyFraction";
/**
 * Converts an angle from degrees to radians.
 * 
 * @param degrees - The angle in degrees.
 * @returns An object containing the equivalent angle in radians in both terms of π and approx. decimal value.
 */
const degreeToRadian = (degrees : number) => {
    let stringRadians = simplifyFraction(`${degrees}/180`);
    if (stringRadians.split("/").length===1) {
        if (stringRadians.split("/")[0]==="1") stringRadians = "π";
        if (stringRadians.split("/")[0]==="-1") stringRadians = "-π";
        const numberRadians = (degrees/180)*Math.PI;
        return {
            inTermsOfPi : stringRadians,
            approxValue : numberRadians
        };
    };
    if (stringRadians.split("/")[0]==="1") stringRadians = "π"+stringRadians.slice(1);
    else if (stringRadians.split("/")[0]==="-1") stringRadians = "-π"+stringRadians.slice(2);
    else stringRadians = stringRadians.split("/")[0]+"π/"+stringRadians.split("/")[1];
    const numberRadians = (degrees/180)*Math.PI;
    return {
        inTermsOfPi : stringRadians,
        approxValue : numberRadians
    };
};
export default degreeToRadian;