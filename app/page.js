import Image from 'next/image'
import { ExpanseCard } from './components'
import * as Icons from './assets/icons'
import { accountBtns, cardButtons, lineButtons } from './assets/dummy'
import * as Utility from './utility'




export default function Home() {
  return (
    <main className="flex flex-col p-4 space-y-2 flex-grow  sm:pb-16 md:pb-0">
      <div className='sm:hidden px-4 pb-6 md:flex items-center justify-between flex-row border-b border-app-border mb-2 ' >
        <section className='' >
          <h1 className='text-2xl font-semibold text-app-blue mb-1' >{Utility.todayCustomFormate()}</h1>
          <p>Trial period remaining <span className='text-red-500' >21 days</span></p>
        </section>
        <section className='flex flex-row space-x-2 ' >
          {
            accountBtns?.map((item, key) => <button key={item.toString()} className="p-2 text-base hover:bg-selected-btn font-semibold capitalize  rounded-xl border border-app-border " >
              {item?.toString()}
            </button>)
          }
        </section>
      </div>
      <section className='flex flex-col  space-y-2  md:space-y-0 space-x-2 lg:flex-row' >
        <div className='flex flex-grow' >
          <div className='flex flex-1 sm:flex-col space-y-2' >
            {lineButtons?.map((item) => (
              <button key={item?.title} className="flex flex-1 mx-2 max-h-28 px-4 py-5 flex-col justify-between text-xs font-semibold capitalize  space-y-4 rounded-xl border border-app-border bg-secondary hover:bg-app-yellow" >
                <h3 className='display:none text-center' >{item?.title}</h3>
              </button>
            ))}
          </div>
          <div className='flex flex-1 sm:flex-col space-y-2 ' >
            {cardButtons?.map((item) => (
              <button key={item?.title} className="flex flex-1 mx-2 max-h-28 px-4 py-5 flex-col justify-between text-xs font-semibold capitalize  space-y-4 rounded-xl border border-app-border bg-secondary hover:bg-app-yellow" >
                {item?.iconName && <Image src={Icons?.[item?.iconName]} alt={item?.iconName} className='sm:hidden md:visible' />}
                <h3 className='display:none' >{item?.title}</h3>
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-grow flex-col space-y-2' >
          {new Array(2).fill('').map((_, key) => <ExpanseCard key={key.toString() + 'income'} progress={Utility?.getRandomInt()} isSpent={false} />)}
        </div>

      </section>
      <h1 className='text-2xl text-app-blue font-bold ml-4 ' >Cash Flow in Aug</h1>
      <section className='flex flex-col space-y-2 lg:flex-row lg:justify-between lg:space-y-0 ' >
        <div className='flex  flex-col space-y-2 flex-1 px-4' >
          <div className='flex flex-row items-center justify-between text-xl font-semibold'>
            <h1>3 month average monthly Income</h1>
            <h1 className='text-app-blue'>€0</h1>
          </div>
          <div className=' flex md:overflow-hidden overflow-x-auto no-scrollbar items-center justify-center ' >
            <div className='flex md:space-x-0 md:space-y-2 md:flex-col flex-row space-x-2  flex-grow' >
              {new Array(3).fill('').map((_, key) => <ExpanseCard key={key.toString() + 'income'} progress={Utility?.getRandomInt()} />)}
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-2 flex-1 px-4' >
          <div className='flex flex-row items-center justify-between text-xl font-semibold'>
            <h1>3 mos avarage monthly expanses</h1>
            <h1 className='text-app-blue'>€0</h1>
          </div>
          <div className=' flex md:overflow-hidden overflow-x-auto no-scrollbar items justify-center' >
            <div className='flex md:space-x-0 md:space-y-2 md:flex-col flex-row space-x-2 flex-grow' >
              {new Array(3).fill('').map((_, key) => <ExpanseCard key={key.toString() + 'spent'} isSpent progress={Utility?.getRandomInt()} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
