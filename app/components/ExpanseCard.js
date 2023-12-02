"use client"
import Image from "next/image";
import * as Icons from '../assets/icons'
import ProgressBar from "./ProgressBar";

export default function ExpanseCard({ isSpent = false, progress }) {
    return <div className="flex min-w-[70%] flex-col max-w-full rounded-lg border bg-secondary border-app-border p-3 hover:shadow-lg" >
        <h3 className="text-app-blue text-center sm:block md:hidden" >Tap to see more</h3>
        <section className="" >
            <div className="flex  justify-between" >
                <h1 className="font-semibold text-sm" >{`This week ${isSpent ? 'spent' : 'earned'}`}</h1>
                <h1 className="text-app-blue text-sm" >€0</h1>
            </div>
            <ProgressBar fillUpColor={!isSpent ? "bg-green-500" : "bg-red-500"} fullProgress={progress} />
            <div className="flex mt-2  justify-between" >
                <div className="flex flex-row items-center" >
                    <h1 className="font-semibold text-sm mr-1" >Left</h1>
                    <Image src={Icons.QuestionMark} className="h-4 w-4" alt="questionMark" />
                </div>
                <h1 className="text-app-yellow text-sm" >Create Budget</h1>
            </div>
        </section>
    </div>
}