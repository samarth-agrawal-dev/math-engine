import findHCF from "./findHCF";

const multiplyByFraction = (fr1: string, fr2: string) => {
    if (fr1.indexOf("/") !== -1 && fr2.indexOf("/") !== -1) {
        let [a, b] = fr1.split("/").map(Number);
        let [c, d] = fr2.split("/").map(Number);
        if (fr1.split("/")[0] === "") a = 1;
        if (fr1.split("/")[0] === "-") a = -1;
        if (fr2.split("/")[0] === "") c = 1;
        if (fr2.split("/")[0] === "-") c = -1;
        if (fr1.split("/")[1] === "-") b = -1;
        if (fr1.split("/")[1] === "") b = 1;
        if (fr2.split("/")[1] === "-") d = -1;
        if (fr2.split("/")[1] === "") d = 1;
        if (b === 0 || d === 0) {
            throw new Error("Division by zero is not allowed");
        }
        const num = a * c;
        const den = b * d;
        const hcf = findHCF([num, den]);
        return `${num / hcf}/${den / hcf}`
    } else if (fr1.indexOf("/") !== -1) {
        let [a, den] = fr1.split("/").map(Number);
        if (fr1.split("/")[0] === "") a = 1;
        if (fr1.split("/")[0] === "-") a = -1;
        if (fr1.split("/")[1] === "-") den = -1;
        if (fr1.split("/")[1] === "") den = 1;
        if (den === 0) {
            throw new Error("Division by zero is not allowed");
        }
        const num = a * parseInt(fr2);
        const hcf = findHCF([num, den]);
        return `${num / hcf}/${den / hcf}`;
    } else {
        let [a, den] = fr2.split("/").map(Number);
        if (fr2.split("/")[0] === "") a = 1;
        if (fr2.split("/")[0] === "-") a = -1;
        if (fr2.split("/")[1] === "-") den = -1;
        if (fr2.split("/")[1] === "") den = 1;
        if (den === 0) {
            throw new Error("Division by zero is not allowed");
        }
        const num = a * parseFloat(fr1);
        const hcf = findHCF([num, den]);
        return `${num / hcf}/${den / hcf}`;
    }
}
export default multiplyByFraction;