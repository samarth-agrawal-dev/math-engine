"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export function NavBar({ items, className, activeTab, setActiveTab }: NavBarProps) {
  return (
    <div
      className={cn(
        "z-50 mx-auto w-[45vw]",
        className,
      )}
    >
      <div className="flex items-center justify-evenly gap-3 bg-background/5 border-2 border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const isActive = activeTab === item.name

          return (
            <div
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer w-[15vw] text-center text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive ? "bg-muted text-primary" : "text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-red rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-8 bg-[#67b8b5] rounded-t-[8px]">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
