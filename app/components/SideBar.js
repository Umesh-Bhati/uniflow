"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navbars } from "../assets/dummy";
import * as Icons from '../assets/icons'

export default function SideBar() {
    const pathName = usePathname()
    const [collapsed, setCollapsed] = useState(false)
    const handleCollapsical = () => setCollapsed(old => !old);
    const transtionAnimation = "transition-all ease-linear duration-350"
    const remainingBtns = ['Chat', 'Settings', 'Id']
    return (
        <>
            <aside aria-label="SideBar" className={`hidden ${collapsed ? "w-16 p-1" : "w-1/5 p-4"} ${transtionAnimation} md:flex fixed flex-col items-center space-y-5 border-r-2 border-app-border bg-secondary h-screen top-0 m-0 overflow-hidden`} >
                <Image src={Icons.UniflowLogo} alt='logo' className={`${collapsed && 'rounded-full border h-10 w-10 p-1'}`} />
                {!collapsed ? <><h1 className="text-base font-semibold text-center" >{"Universal ID number\nUID1234"}</h1>
                    <button className="h-12 capitalize font-medium m-auto rounded-xl border border-app-border w-full hover:bg-app-yellow" >
                        <h1 className="text-base font-semibold" >Premium services</h1>
                    </button>
                    <section className={`flex flex-row items-center justify-evenly w-full space-x-1`} >
                        {remainingBtns?.map(icon => <Link key={icon} href='./' className="flex flex-1 items-center justify-center hover:rounded-md hover:bg-primary " >
                            <Image src={Icons?.[icon]} alt={icon} className="w-9 h-9" />
                        </Link>)}
                    </section> </> :
                    remainingBtns?.map(icon => <Link key={icon} href='./' className="flex w-full h-11  items-center justify-center hover:rounded-md hover:bg-primary " >
                        <Image src={Icons?.[icon]} alt={icon} />
                    </Link>)
                }
                {
                    navbars?.map((item, key) => (<Link key={key.toString()} className={`${pathName === item.pathName ? 'bg-primary border' : 'bg-secondary'} ${collapsed ? "justify-center" : 'pl-2'} hover:bg-primary flex items-center w-full h-11 rounded-lg`} href={item.pathName} >
                        <Image src={Icons?.[item.icon]} alt={item.title} />
                        <h2 className={`${collapsed && 'hidden'} ${transtionAnimation} capitalize ml-2 text-base font-semibold`} >{item.title}</h2>
                    </Link>
                    ))
                }
                <button onClick={handleCollapsical} className={`self-end z-10 p-2 rounded-full transition-all hover:bg-primary`} >
                    <Image src={Icons?.[collapsed ? 'LeftArrow' : 'RightArrow']} className={`${transtionAnimation} h-6 w-6 hover:h-7 hover:w-7`} alt={'support'} />
                </button>
                <Link className={`${pathName === 'support' ? 'bg-primary border' : 'bg-secondary'} ${collapsed ? "justify-center" : 'pl-2'} hover:bg-primary flex items-center w-full h-11 rounded-lg  ${transtionAnimation}`} href={'./support'} >
                    <Image src={Icons?.QuestionMark} alt={"questionmark"} className="h-6 w-6" />
                    <h2 className={`${collapsed && 'hidden'} capitalize ml-2 text-base font-semibold`} >Support</h2>
                </Link>
            </aside>
            <div className={`hidden md:block ${collapsed ? "w-16 p-1" : "w-1/5 p-4"} h-screen top-0 m-0 p-0 ${transtionAnimation}`} />
        </>)
}