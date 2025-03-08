"use client"
import changeToCrazy from "@/utils/changeToCrazy"
import { Noto_Sans_Math } from 'next/font/google';
import { JSX } from "react"
import Fraction from "@/components/Fraction"
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useState } from "react"
import { solveEquation } from "@/actions";
const notoSansMath = Noto_Sans_Math({
    weight: '400',
    subsets: ['math'],
    display: 'swap',
});
const Algebra = () => {
    const [activeEquation, setActiveEquation] = useState("Linear Equations")
    const [linearEquationInput, setLinearEquationInput] = useState("")
    const [quadraticEquationInput, setQuadraticEquationInput] = useState("")
    const [multipleEquationsInput, setMultipleEquationsInput] = useState<[string,string]>(["", ""])
    const [solvedEquationData, setSolvedEquationData] = useState("")
    const [multipleEquationsData, setMultipleEquationsData] = useState<string[]>([])
    type equationDescribeContent = {
        "Linear Equations": JSX.Element;
        "Quadratic Equations": JSX.Element;
        "Multiple Equations": JSX.Element;
    }
    const buttonAction = async () => {
        if (activeEquation === "Linear Equations") {
            setSolvedEquationData(await solveEquation([linearEquationInput,""],activeEquation) as string)
            setMultipleEquationsData([])
        } else if (activeEquation === "Quadratic Equations") {
            setMultipleEquationsData([])
            setSolvedEquationData(await solveEquation([quadraticEquationInput,""],activeEquation) as string)
        } else {
            setSolvedEquationData("")
            setMultipleEquationsData(await solveEquation(multipleEquationsInput,activeEquation) as string[])
        }
    }
    const equationDescribeContent: equationDescribeContent = {
        "Linear Equations": (<span>
            Enter an equation of the form {changeToCrazy("ax+b=0")}. {changeToCrazy("a")} & {changeToCrazy("b")} can be any constants.
            If it is not already in the form {changeToCrazy("ax+b=0")}, then it
            will still get converted with no problem as long as it is not incorrect.
        </span>),
        "Quadratic Equations": (<span>
            Enter an equation of the form {changeToCrazy("ax")}<sup>2</sup>+{changeToCrazy("bx")}+{changeToCrazy("c=0")}
            where a&ne;0. Keep it in terms of x. If it is not already in the form {changeToCrazy("ax")}<sup>2</sup>+{changeToCrazy("bx")}+{changeToCrazy("c=0")}
            , then it will still get converted with no problem as long as the equation has real roots, {changeToCrazy("i.e.")}, it&apos;s discriminant is positive. Use x^2 to
            write {changeToCrazy("x")}<sup>2</sup>.
        </span>),
        "Multiple Equations": (<span>
            Enter two equations of the form {changeToCrazy("a")}<sub>1</sub>{changeToCrazy("x")}+{changeToCrazy("b")}<sub>1</sub>{changeToCrazy("y")}+{changeToCrazy("c")}<sub>1</sub>=0
            & {changeToCrazy("a")}<sub>2</sub>{changeToCrazy("x")}+{changeToCrazy("b")}<sub>2</sub>{changeToCrazy("y")}+{changeToCrazy("c")}<sub>2</sub> = 0
            where {changeToCrazy("a")}<sub>1</sub>, {changeToCrazy("b")}<sub>1</sub>, {changeToCrazy("c")}<sub>1</sub>, {changeToCrazy("a")}<sub>2</sub>, {changeToCrazy("b")}<sub>2</sub> & {changeToCrazy("c")}<sub>2</sub>
            are constants and {changeToCrazy("x")} and {changeToCrazy("y")} are variables. If they are not in the standard form, answers will still be given as long as they have only one solution, {changeToCrazy("i.e.")},<span className=" ml-2 inline-flex gap-2 items-center"><Fraction
                numerator={<span>{changeToCrazy("a")}<sub>1</sub></span>}
                denominator={<span>{changeToCrazy("a")}<sub>2</sub></span>}
                size={34}
            /> &ne; <Fraction
                    numerator={<span>{changeToCrazy("b")}<sub>1</sub></span>}
                    denominator={<span>{changeToCrazy("b")}<sub>2</sub></span>}
                    size={34}
                />
            </span></span>)
    }
    return (
        <>
            <div className="relative bg-transparent flex flex-col justify-evenly items-center h-screen noto-sans-math-regular">
                <span className={`text-5xl z-20 text-white ${notoSansMath.className} text-bold`}>{changeToCrazy("Algebra")}</span>
                <div className="relative w-[95vw] h-[80vh] z-20 bg-transparent text-white flex justify-center items-center rounded-[20px] border-3 border-white">
                    <div className="h-[75vh] w-[47.5vw] z-30 border-r-3 border-r-white flex flex-col items-end">
                        <div className="w-[47vw] h-[6vh]">
                            <NavBar items={[
                                { name: "Linear Equations" },
                                { name: "Quadratic Equations" },
                                { name: "Multiple Equations" }
                            ]} activeTab={activeEquation} setActiveTab={setActiveEquation} />
                        </div>
                        <div className="w-[47vw] my-5 h-0.5 border-b-3 border-b-white"></div>
                        <div className={`mx-auto p-6 ${activeEquation == "Multiple Equations" ? "pb-2" : ""}  bg-[rgba(209,117,248,0.1)] rounded-lg shadow-md w-[43vw] text-[20px] font-[Rajdhani] font-bold`}>{equationDescribeContent[activeEquation as keyof equationDescribeContent]}</div>
                        <div className={`w-[47vw] my-5 h-0.5 border-b-3 border-b-white`}></div>
                        {activeEquation === "Linear Equations" && <textarea
                            className={`mx-auto p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[43vw] h-[40vh] text-[30px] placeholder:font-bold ${notoSansMath.className} placeholder:font-[Rajdhani] font-bold focus:ring-2 focus:ring-white`}
                            placeholder="Enter your equation here."
                            value={linearEquationInput}
                            onChange={(e) => setLinearEquationInput(changeToCrazy(e.target.value))}
                        >
                        </textarea>}
                        {activeEquation === "Quadratic Equations" && <textarea
                            className={`mx-auto p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[43vw] h-[34vh] text-[30px] placeholder:font-bold ${notoSansMath.className} placeholder:font-[Rajdhani] font-bold focus:ring-2 focus:ring-white`}
                            placeholder="Enter your equation here."
                            value={quadraticEquationInput}
                            onChange={(e) => setQuadraticEquationInput(changeToCrazy(e.target.value))}
                        >
                        </textarea>}
                        {activeEquation === "Multiple Equations" && <div className="flex w-[47vw] gap-[0.5vw] mx-auto justify-center items-center">
                            <textarea
                                className={`p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[21.5vw] h-[32vh] text-[30px] placeholder:font-bold ${notoSansMath.className} placeholder:font-[Rajdhani] font-bold focus:ring-1 focus:ring-white`}
                                placeholder="Enter first equation."
                                value={multipleEquationsInput[0]}
                                onChange={(e) => setMultipleEquationsInput([changeToCrazy(e.target.value), multipleEquationsInput[1]])}
                            >
                            </textarea>
                            <textarea
                                className={`p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[21.6vw] h-[32vh] text-[30px] placeholder:font-bold ${notoSansMath.className} placeholder:font-[Rajdhani] font-bold focus:ring-1 focus:ring-white`}
                                placeholder="Enter second equation."
                                value={multipleEquationsInput[1]}
                                onChange={(e) => setMultipleEquationsInput([multipleEquationsInput[0], changeToCrazy(e.target.value)])}
                            >
                            </textarea>
                        </div>}
                    </div>
                    <div className="h-[75vh] w-[47.5vw] z-30">
                        <div className="w-[45vw] h-[75vh] mx-auto rounded-xl flex justify-center items-center bg-[rgb(255,0,0,0.25)]">
                            <button onClick={buttonAction} className=" font-[Poppins] font-extralight text-[35px] focus:ring-2 transition-opacity bg-black hover:opacity-80 active:opacity-95 px-10 py-5 rounded-3xl">SOLVE</button>
                            {solvedEquationData.length ? solvedEquationData : multipleEquationsData}
                        </div>
                    </div>
                    <div className="w-[95vw] z-20 h-[80vh] border-white border-3 bg-blue-300 opacity-20 fixed text-white rounded-[20px]"></div>
                </div>
                <div className="brightness-30 bg-[url('/mathbg.jpg')] z-10 bg-cover bg-center bg-no-repeat fixed w-screen h-screen"></div>
            </div>
        </>
    )
}

export default Algebra