import HoverCard from "./components/HoverCard"
import changeToCrazy from "./changeToCrazy"
import { Link } from "react-router-dom"
const App = () => {
  return <>
      <div className="relative bg-transparent flex flex-col justify-evenly items-center h-screen noto-sans-math-regular">
        <span className="text-8xl z-20 text-white noto-sans-math-regular text-bold">{changeToCrazy("Mathematics Made EasY")}</span>
        <div className="flex gap-7 z-20 flex-wrap justify-center items-center">
          <Link to={"/algebra"}><HoverCard text="Algebra" backgroundImageUrl="/algebra.png" cardHeading="Solve for x." footerText="Linear and Quadratic equations." glowColour="bluish"/></Link>
          <Link to={"/trignometry"}><HoverCard text="Trignometry" backgroundImageUrl="/trignometry.png" cardHeading="Proofs & ratios." footerText="Approximation and AI-integration." glowColour="yellowish"/></Link>
          <Link to={"/limits"}><HoverCard text="Limits" backgroundImageUrl="/limits.png" cardHeading="Graphically & Algebraically." footerText="x => 5 , f(x) => ?" glowColour="pinkish"/></Link>
          <Link to={"/derivatives"}><HoverCard text="Derivatives" backgroundImageUrl="/derivatives.png" cardHeading="dy/dx" footerText="Slope of f(x) = 𝚫y/𝚫x" glowColour="greenish"/></Link>
          <Link to={"integration"}><HoverCard text="Integration" backgroundImageUrl="/integration.png" cardHeading="Infinite rectangles." footerText="The area under the graph of f(x)." glowColour="reddish"/></Link>
        </div> 
        <div className="brightness-30 bg-[url('/mathbg.jpg')] z-10 bg-cover bg-center bg-no-repeat fixed w-screen h-screen"></div>
      </div>
  </>
}

export default App
