import multiplyTwoTerms from "./multiplyTwoTerms";

const extractInnerParentheses = (expression: string): string => {
    let openCount = 0;
    let startIdx = -1;
    let endIdx = -1;

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            if (openCount === 0) startIdx = i + 1;
            openCount++;
        } else if (expression[i] === ')') {
            openCount--;
            if (openCount === 0) {
                endIdx = i;
                break;
            }
        }
    }
    if (startIdx !== -1 && endIdx !== -1) {
        return expression.slice(startIdx, endIdx);
    }

    return "";
};
const countCharOccurrences = (str: string, char: string): number => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
};
function extractMultipliedBrackets(expression: string): string[] {
    const regex = /\(([^)]+)\)/g;
    const matches: string[] = [];
    let match: RegExpExecArray | null;

    while ((match = regex.exec(expression)) !== null) {
        matches.push(match[1]);
    }

    return matches;
};
/**
 * Extracts terms from a given algebraic expression, handling parentheses and multiplication.
 * 
 * @param expression - The algebraic expression as a string that may contain parentheses and algebraic terms.
 * @returns An array of terms extracted from the expression, or 0 if the expression has mismatched parentheses.
 */
const extractTerms = (expression: string): string[] | number => {
    if (countCharOccurrences(expression, "(") !== countCharOccurrences(expression, ")")) return 0;

    if (expression.indexOf("(") === -1) {
        const arr: string[] = expression.replace(/-/g, "+-").split("+");
        const returnArr: string[] = []
        for (let i = 0; i<arr.length;i++) {
            const term = arr[i];
            if (term!=="") {
                if (term[term.length-1]!=="/") {
                    returnArr.push(term);
                } else {
                    returnArr.push(term+arr[i+1]);
                    i++;
                }
            }
        }
        return returnArr;
    } else {
        if (expression.indexOf(")(") == -1) {
            const bracketTerm = extractInnerParentheses(expression);
            const str = expression.slice(0, expression.indexOf(`(${bracketTerm})`)).split("").reverse().join("");
            let multiplyTerm: string = "";
            let signIndex: number = 0;
            for (let char of str) {
                if (char === "+" || char === "-" || str.indexOf(char) === str.length - 1) {
                    signIndex = str.indexOf(char);
                    multiplyTerm = str.slice(0, signIndex + 1).split("").reverse().join("");
                    break;
                }
            }

            const laterExp = expression.slice(expression.indexOf(`(${bracketTerm})`) + bracketTerm.length + 2);
            let laterMultiplyTerm: string = "";

            if (laterExp && laterExp[0] !== "+" && laterExp[0] !== "-") {
                for (let char of laterExp) {
                    if ((char === "+" || char === "-") && (laterMultiplyTerm !== "/")) {
                        break;
                    } else {
                        laterMultiplyTerm += char;
                    }
                }
            }
            if (laterMultiplyTerm=="^2"){
                return extractTerms(expression.replace(`(${bracketTerm})^2`,`(${bracketTerm})(${bracketTerm})`))
            }
            const bracketTerms = extractTerms(bracketTerm);
            if (typeof bracketTerms === "number") return 0;

            const newTerms: string[] = bracketTerms.map((term) => {
                let value: string;
                if (laterMultiplyTerm) {
                    if (laterMultiplyTerm.indexOf("/")!==-1) {
                        value = multiplyTwoTerms(multiplyTwoTerms(multiplyTerm,(multiplyTwoTerms("1",laterMultiplyTerm))),term)
                        if (value.split("/")[1][0]=="-") {
                            value = multiplyTwoTerms("-1",value.split("/")[0])+"/"+value.split("/")[1].slice(1)
                        }
                    } else {
                        value = multiplyTwoTerms(multiplyTwoTerms(multiplyTerm,laterMultiplyTerm), term);
                    }
                    if (value[0] !== "-") value = "+" + value;
                    return value;
                } else {
                    value = multiplyTwoTerms(multiplyTerm, term);
                    if (value[0] !== "-") value = "+" + value;
                    return value;
                }
            });
            const newStr = newTerms.join("");
            const finalExpr = expression.replace(`${multiplyTerm}(${bracketTerm})${laterMultiplyTerm}`, newStr);
            const terms = extractTerms(finalExpr);
            return terms;
        } else {
            const [first,second]=(extractMultipliedBrackets(expression));
            const firstTerms=extractTerms(first);
            const secondTerms=extractTerms(second);
            if (typeof firstTerms=="number" || typeof secondTerms=="number"){
                throw new Error("Invalid Equation Argument.");
            }
            const multipliedTerms:string[]=[];
            for (let termA of firstTerms) {
                for (let termB of secondTerms) {
                    let value=multiplyTwoTerms(termA,termB);
                    if (value[0]!=="-"){
                        value = "+" + value;
                    }
                    multipliedTerms.push(value);
                }
            }
            const newExpr=multipliedTerms.join("");
            const finalExpr=expression.replace(`${first})(${second}`,newExpr);
            return extractTerms(finalExpr);
        };
    };
};
export default extractTerms;