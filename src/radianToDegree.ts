/**
 * Converts an angle from radians to degrees.
 * 
 * @param radians - The angle in radians.
 * @returns The equivalent angle in degrees.
 */
const radianToDegree = (radians: number): number => {
    return (radians / Math.PI) * 180;
};
export default radianToDegree;