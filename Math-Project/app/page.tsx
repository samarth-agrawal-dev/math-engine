import React from 'react'
import Link from 'next/link'
import HoverCard from '@/components/HoverCard'
const page = () => {
  return <>
      <div className="relative bg-transparent flex flex-col justify-evenly items-center h-screen font-[Poppins]">
        <span className="text-8xl z-20 text-white font-[Rajdhani] font-bold">Mathematics Made Easy</span>
        <div className="flex gap-7 z-20 flex-wrap justify-center items-center">
          <Link href={"/algebra"}><HoverCard text="Algebra" backgroundImageUrl="/algebra.png" cardHeading="Solve for x." footerText="Linear and Quadratic equations." glowColour="bluish"/></Link>
          <Link href={"/trignometry"}><HoverCard text="Trignometry" backgroundImageUrl="/trignometry.png" cardHeading="Proofs & ratios." footerText="Approximation and AI-integration." glowColour="yellowish"/></Link>
          <Link href={"/limits"}><HoverCard text="Limits" backgroundImageUrl="/limits.png" cardHeading="Graphically & Algebraically." footerText="x => 5 , f(x) => ?" glowColour="pinkish"/></Link>
          <Link href={"/derivatives"}><HoverCard text="Derivatives" backgroundImageUrl="/derivatives.png" cardHeading="dy/dx" footerText="Slope of f(x) = 𝚫y/𝚫x" glowColour="greenish"/></Link>
          <Link href={"integration"}><HoverCard text="Integration" backgroundImageUrl="/integration.png" cardHeading="Infinite rectangles." footerText="The area under the graph of f(x)." glowColour="reddish"/></Link>
        </div> 
        <div className="brightness-30 bg-[url('@/public/mathbg.jpg')] z-10 bg-cover bg-center bg-no-repeat fixed w-screen h-screen"></div>
      </div>
  </>
}

export default page