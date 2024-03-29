import { ShoppingBag } from 'lucide-react'
import React from 'react'

const SmallCard = ({data}) => {
    // const {title, number, iconBg, icon: Icon} = data;
    // console.log(iconBg);
  return (
    <div className='rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 dark:text-slate-50 text-slate-800'>
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${data.iconBg} rounded-full items-center flex justify-center`}>
                <data.Icon className="dark:text-white text-slate-50"/>
            </div>
            <div className="">
                <p>{data.title}</p>
                <h1 className='font-bold text-2xl'>{data.number}</h1>
            </div>
        </div>
    </div>
  )
}

export default SmallCard
