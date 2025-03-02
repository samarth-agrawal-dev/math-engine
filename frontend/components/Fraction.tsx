import { ReactNode } from "react";

const Fraction = ({numerator, denominator, size} : {numerator : ReactNode, denominator: ReactNode, size : number}) => {
    return (
    <span className={`inline-flex flex-col text-center`} style={{width : `${size}px`}}>
        <span className={`border-b-white border-b-2`} style={{fontSize : `${size/2}px`}}>{numerator}</span>
        <span className={`border-t-white border-t-2`} style={{fontSize : `${size/2}px`}}>{denominator}</span>
    </span>
)
}

export default Fraction