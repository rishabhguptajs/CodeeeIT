import { CardsStack } from "@/components/card-stack"
import { Navbar } from "@/components/navbar"
import React from "react"

const Features = () => {
return (
    <main className="h-screen w-screen dark:bg-black bg-white text-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Navbar />
        <div className="h-[70vh] w-[80vw] relative top-10 overflow-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <CardsStack />
        </div>
    </main>
)
}

export default Features
