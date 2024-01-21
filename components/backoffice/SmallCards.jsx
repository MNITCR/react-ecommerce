import React from 'react'
import LargeCard from './LargeCard'
import SmallCard from './SmallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react'

const SmallCards = () => {
    const orderStatus = [
        {
            title: "Total Orders",
            number: 500,
            iconBg: "bg-green-600",
            Icon: ShoppingCart
        },
        {
            title: "Orders Padding",
            number: 100,
            iconBg: "bg-blue-600",
            Icon: Loader2
        },
        {
            title: "Orders Processing",
            number: 300,
            iconBg: "bg-orange-600",
            Icon: RefreshCcw
        },
        {
            title: "Orders Delivers",
            number: 300,
            iconBg: "bg-purple-600",
            Icon: CheckCheck
        },
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4'>
            {
                orderStatus.map((items, i) => {
                    return(
                        <SmallCard data={items}/>
                    )
                })
            }
        </div>
    )
}

export default SmallCards
