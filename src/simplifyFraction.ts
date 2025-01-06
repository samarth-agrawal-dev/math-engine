import findHCF from "./findHCF";

const simplifyFraction = (fraction : string) => {
    let [num,den] = fraction.split("/").map(Number);
    const hcf = findHCF([num,den]);
    if (hcf===den) return `${num/hcf}`
    if (den<0) {
        num=num*-1
        den=den*-1
    }
    return `${num/hcf}/${den/hcf}`
}
export default simplifyFraction;