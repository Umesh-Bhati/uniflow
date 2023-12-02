"use client"
import { useEffect, useRef } from "react"

export default function ProgressBar({ fillUpColor = "bg-green-500", fullProgress = 80 }) {
    const barRef = useRef()

    useEffect(() => {
        let bar = barRef.current
        bar.style.width = fullProgress + "%";
        bar.style.hover = {
            width: 0
        }
        return () => {
            bar.style.width = 0
        }
    }, [fullProgress])

    return (
        <div className="h-2 relative max-w-xl rounded-full overflow-hidden mt-2">
            <div className="w-full h-full bg-gray-200 absolute" />
            <div ref={barRef} id="bar" className={`h-full ${fillUpColor} relative w-0 transition-all ease-linear duration-700`} />
        </div>
    )
}