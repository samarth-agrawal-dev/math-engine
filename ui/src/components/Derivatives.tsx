import changeToCrazy from "../changeToCrazy"
const Derivatives = () => {
  return (
    <>
      <div className="relative bg-transparent flex flex-col justify-evenly items-center h-screen noto-sans-math-regular">
        <span className="text-8xl z-20 text-white noto-sans-math-regular text-bold">{changeToCrazy("Derivatives")}</span>
        <div className="brightness-30 bg-[url('/mathbg.jpg')] z-10 bg-cover bg-center bg-no-repeat fixed w-screen h-screen"></div>
      </div>
    </>
  )
}

export default Derivatives