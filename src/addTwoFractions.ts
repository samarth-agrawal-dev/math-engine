import findHCF from "./findHCF";
import findLCM from "./findLCM";

const addTwoFractions = (fr1: string, fr2: string) => {
    let [a, b] = fr1.split("/").map(Number);
    let [c, d] = fr2.split("/").map(Number);
    if (fr1.split("/")[0] === "") a = 1;
    if (fr1.split("/")[0] === "-") a = -1;
    if (fr2.split("/")[0] === "") c = 1;
    if (fr2.split("/")[0] === "-") c = -1;
    if (fr1.split("/")[1] === "-") b = -1;
    if (fr2.split("/")[1] === "-") d = -1;
    if (b === 0 || d === 0) {
        throw new Error("Division by zero is not allowed");
    }
    const denLcm = findLCM([b, d]);
    const num = (a * denLcm / b) + (c * denLcm / d);
    const hcf = findHCF([num,denLcm]);
    return `${num/hcf}/${denLcm/hcf}`
}
export default addTwoFractions;