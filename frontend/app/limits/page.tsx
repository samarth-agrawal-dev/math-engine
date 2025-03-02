import changeToCrazy from "@/utils/changeToCrazy"
const Limits = () => {
  return (
    <>
      <div className="relative bg-transparent flex flex-col justify-evenly items-center h-screen noto-sans-math-regular">
        <span className="text-5xl z-20 text-white noto-sans-math-regular text-bold">{changeToCrazy("Limits")}</span>
        <div className="brightness-30 bg-[url('/mathbg.jpg')] z-10 bg-cover bg-center bg-no-repeat fixed w-screen h-screen"></div>
        <div className="relative w-[95vw] h-[80vh] z-20 bg-transparent text-white flex justify-center items-center rounded-[20px] border-3 border-white">
          <div className="h-[75vh] w-[45vw] border-r-3 border-r-white"></div>
          <div className="h-[75vh] w-[45vw]"></div>
          <div className="w-[95vw] z-20 h-[80vh] border-white border-3 bg-blue-300 opacity-20 fixed text-white rounded-[20px]"></div>
        </div>
      </div>
    </>
  )
}

export default Limits