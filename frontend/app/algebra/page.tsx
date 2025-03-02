"use client"
import changeToCrazy from "@/utils/changeToCrazy"
import { JSX } from "react"
import Fraction from "@/components/Fraction"
import { useEffect, useState, useRef } from "react"
const Algebra = () => {
  const [equationSelected, setEquationSelected] = useState("linear1")
  const [linearEquationInput, setLinearEquationInput] = useState("")
  const [quadraticEquationInput, setQuadraticEquationInput] = useState("")
  const [multipleEquationsInput, setMultipleEquationsInput] = useState(["",""])
  const inputRef = useRef<HTMLButtonElement>(null);
  type equationDescribeContent = {
    linear1: JSX.Element;
    quadratic: JSX.Element;
    linear2: JSX.Element;
  }
  const equationDescribeContent : equationDescribeContent = {
    "linear1": (<span>
        Enter an equation of the form {changeToCrazy("ax+b=0")}. {changeToCrazy("a")} & {changeToCrazy("b")} can be any constants.
        If it is not already in the form {changeToCrazy("ax+b=0")}, then it
        will still get converted with no problem as long as it is not incorrect.
    </span>),
    "quadratic": (<span>
        Enter an equation of the form {changeToCrazy("ax")}<sup>2</sup>+{changeToCrazy("bx")}+{changeToCrazy("c=0")}
         where a&ne;0. Keep it in terms of x. If it is not already in the form {changeToCrazy("ax")}<sup>2</sup>+{changeToCrazy("bx")}+{changeToCrazy("c=0")}
          , then it will still get converted with no problem as long as the equation has real roots, {changeToCrazy("i.e.")}, it&apos;s discriminant is positive. Use x^2 to
            write {changeToCrazy("x")}<sup>2</sup>.
        </span>),
    "linear2": (<span>
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
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <div className="relative bg-transparent flex flex-col justify-evenly items-center h-screen noto-sans-math-regular">
        <span className="text-5xl z-20 text-white noto-sans-math-regular text-bold">{changeToCrazy("Algebra")}</span>
        <div className="relative w-[95vw] h-[80vh] z-20 bg-transparent text-white flex justify-center items-center rounded-[20px] border-3 border-white">
          <div className="h-[75vh] w-[47.5vw] z-30 border-r-3 border-r-white flex flex-col items-end">
            <div className="mx-auto p-6 bg-[rgba(117,248,248,0.1)] rounded-lg shadow-md w-[43vw]">
              <h2 className="text-2xl font-semibold text-center text-white mb-6">Select the type of equation :</h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  ref={inputRef}
                  onClick={() => setEquationSelected("linear1")}
                  className="flex items-center justify-center w-full py-3 text-white bg-[#080807] rounded-md hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ease-in-out"
                >
                  <span className="font-bold">Linear Equation</span>
                </button>
                <button
                  onClick={() => setEquationSelected("quadratic")}
                  className="flex items-center justify-center w-full py-3 text-white bg-[#080807] rounded-md hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ease-in-out"
                >
                  <span className="font-bold">Quadratic Equation</span>
                </button>
                <button
                  onClick={() => setEquationSelected("linear2")}
                  className="flex items-center justify-center w-full py-3 text-white bg-[#080807] rounded-md hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ease-in-out"
                >
                  <span className="font-bold">Multiple Equations</span>
                </button>
              </div>
            </div>
            <div className="w-[47vw] my-5 h-0.5 border-b-3 border-b-white"></div>
            <div className={`mx-auto p-6 ${equationSelected=="linear2" ? "pb-2" : ""}  bg-[rgba(209,117,248,0.1)] rounded-lg shadow-md w-[43vw] text-[20px] font-[Rajdhani] font-bold`}>{equationDescribeContent[equationSelected as keyof equationDescribeContent]}</div>
            <div className={`w-[47vw] my-5 ${equationSelected=="linear2" ? "mb-2.5" : ""} h-0.5 border-b-3 border-b-white`}></div>
            {equationSelected==="linear1" && <textarea
                className="mx-auto p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[43vw] h-[30vh] text-[30px] font-[Rajdhani] font-bold focus:ring-2 focus:ring-white"
                placeholder="Enter your equation here."
                value={linearEquationInput}
                onChange = {(e) => setLinearEquationInput(e.target.value)}
              >
            </textarea>}
            {equationSelected==="quadratic" && <textarea
                className="mx-auto p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[43vw] h-[25vh] text-[30px] font-[Rajdhani] font-bold focus:ring-2 focus:ring-white"
                placeholder="Enter your equation here."
                value={quadraticEquationInput}
                onChange = {(e) => setQuadraticEquationInput(e.target.value)}
              >
            </textarea>}
            {equationSelected==="linear2" && <div className="flex w-[47vw] gap-[0.5vw] mx-auto justify-center items-center">
              <textarea
                className="p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[21.5vw] h-[20vh] text-[30px] font-[Rajdhani] font-bold focus:ring-1 focus:ring-white"
                placeholder="Enter first equation."
                value={multipleEquationsInput[0]}
                onChange = {(e) => setMultipleEquationsInput([e.target.value,multipleEquationsInput[1]])}
              >
              </textarea>
              <textarea
                className="p-6 bg-[rgba(249,249,88,0.3)] rounded-lg shadow-md w-[21.6vw] h-[20vh] text-[30px] font-[Rajdhani] font-bold focus:ring-1 focus:ring-white"
                placeholder="Enter second equation."
                value={multipleEquationsInput[1]}
                onChange = {(e) => setMultipleEquationsInput([multipleEquationsInput[0],e.target.value])}
              >
            </textarea>
            </div>}
          </div>
          <div className="h-[75vh] w-[47.5vw] z-30"></div>
          <div className="w-[95vw] z-20 h-[80vh] border-white border-3 bg-blue-300 opacity-20 fixed text-white rounded-[20px]"></div>
        </div>
        <div className="brightness-30 bg-[url('/mathbg.jpg')] z-10 bg-cover bg-center bg-no-repeat fixed w-screen h-screen"></div>
      </div>
    </>
  )
}

export default Algebra