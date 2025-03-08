import multiplyByFraction from "./multiplyByFractions";
/**
 * Multiplies two algebraic terms and returns the result as a string.
 * 
 * @param term1 - The first term, which can be a variable (x, y, or x^2), number, or a fraction.
 * @param term2 - The second term, which can be a variable (x, y, or x^2), number, or a fraction.
 * @returns The product of the two terms as a string, including the correct variables and exponents.
 */
function multiplyTwoTerms(term1: string, term2: string): string {
    let val1: (string | number) = term1.replace("x^2", "").replace("x", "").replace("y", "");
    let val2: (string | number) = term2.replace("x^2", "").replace("x", "").replace("y", "");
    
    if (val1 === "+") val1 = "1";
    if (val1 === "") val1 = "1";
    if (val1 === "-") val1 = "-1";
    
    if (val2 === "+") val2 = "1";
    if (val2 === "") val2 = "1";
    if (val2 === "-") val2 = "-1";
    let value:string=""
    if (val1.indexOf("/") !== -1) {
        value = multiplyByFraction(val1,val2);
    } else {
        if (val2.indexOf("/") !== -1) {
            value = multiplyByFraction(val1,val2);
        } else {
            val1 = parseFloat(val1);
            val2 = parseFloat(val2);
            value = `${val1 * val2}`;
        }
    }
    if ((term1.indexOf("x^2") !== -1 && term2.indexOf("x") === -1) || (term2.indexOf("x^2") !== -1 && term1.indexOf("x") === -1)) {
        if (value.split("/").length==1) return `${value}x^2`;
        else return `${value.split("/")[0]}x^2/${value.split("/")[1]}`;
    } else if (term1.indexOf("x") !== -1 && term2.indexOf("x") !== -1) {
        if (value.split("/").length==1) return `${value}x^2`;
        else return `${value.split("/")[0]}x^2/${value.split("/")[1]}`;
    } else if ((term1.indexOf("x") !== -1 && term2.indexOf("y") !== -1) || (term1.indexOf("y") !== -1 && term2.indexOf("x") !== -1)) {
        if (value.split("/").length==1) return `${value}xy`;
        else return `${value.split("/")[0]}xy/${value.split("/")[1]}`;
    } else if ((term1.indexOf("y") !== -1) || (term2.indexOf("y") !== -1)){
        if (value.split("/").length==1) return `${value}y`;
        else return `${value.split("/")[0]}y/${value.split("/")[1]}`;
    } else if (term1.indexOf("x") !== -1 || term2.indexOf("x") !== -1) {
        if (value.split("/").length==1) return `${value}x`;
        else return `${value.split("/")[0]}x/${value.split("/")[1]}`;
    } else {
        return `${value}`;
    }
}

export default multiplyTwoTerms;