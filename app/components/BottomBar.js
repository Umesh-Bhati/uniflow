import Link from "next/link";
import { navbars } from "../assets/dummy";
import Image from "next/image";
import * as Icons from '../assets/icons'

const topNavs = ['dashboard', 'crm', 'logo', 'hr', 'settings']

export default function BottomBar() {
    return (
        <>
            <div className="md:hidden sm:flex fixed h-14 flex-row w-full  items-center justify-around top-0 m-0 p-0">
                {
                    topNavs.map(item => (
                        <Link key={item} href={item} className={`${item !== 'logo' && 'hover:bg-selected-btn hover:border border-app-border rounded-md py-1 px-2'}`} >
                            {item === 'logo' ? <Image alt={"logo"} src={Icons?.UniflowLogo} className="h-10 w-10 rounded-full border p-1" /> : <h1 className="font-semibold text-sm  capitalize" >{item}</h1>}
                        </Link>
                    ))
                }
            </div>
            <div className="md:hidden h-14 flex w-full" />
            <div className="md:hidden sm:flex fixed h-16 flex-row w-full space-x-2 items-center justify-center bottom-0 m-0 p-0">
                {
                    navbars.map(item => (
                        <Link key={item.title} href={item.pathName} className={`hover:bg-secondary flex flex-col rounded-lg items-center justify-around flex-1 py-1`} >
                            <Image src={Icons?.[item.icon]} alt={item.title} />
                            <h1 className="font-semibold text-sm" >{item.title}</h1>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}