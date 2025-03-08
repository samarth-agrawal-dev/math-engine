import multiplyTwoTerms from "./multiplyTwoTerms";
import sortTerms from "./sortTerms";
const handleTerms = (terms:string[]) : [string[],string] => {
    let denominators:string[]=[];
    for (let term of terms) {
        if (term.indexOf('/')!==-1){
            denominators.push(term.split("/")[1]);
        } else {
            denominators.push("1");
        }
    }
    const newTerms:string[]=[]
    for (let term of terms) {
        let newTerm:string=term.split("/")[0]
        for (let denominator of denominators) {
            if (term.split("/")[1]!==denominator){
                newTerm=multiplyTwoTerms(newTerm,denominator);
            }
        }
        newTerms.push(newTerm);
    }
    let denominatorsMultiple:string="1"
    for (let denominator of denominators) {
        if (denominatorsMultiple!==multiplyTwoTerms(denominator,"1")) denominatorsMultiple = multiplyTwoTerms(denominator, denominatorsMultiple)
    }
    return [newTerms, denominatorsMultiple];
}
const handleVariableFraction = (lhsTerms:string[],rhsTerms:string[]) : [string[],string[]] => {
    const [newLhsTerms, lhsLcm] = handleTerms(lhsTerms);
    const [newRhsTerms, rhsLcm] = handleTerms(rhsTerms);
    const multipliedLhsTerms:string[]=[];
    const multipliedRhsTerms:string[]=[];
    for (let term of newLhsTerms) {
        multipliedLhsTerms.push(multiplyTwoTerms(term,rhsLcm))
    }
    for (let term of newRhsTerms) {
        multipliedRhsTerms.push(multiplyTwoTerms(term,lhsLcm))
    }
    const sortedTerms = sortTerms(multipliedLhsTerms,multipliedRhsTerms);
    return sortedTerms;
}
export default handleVariableFraction;