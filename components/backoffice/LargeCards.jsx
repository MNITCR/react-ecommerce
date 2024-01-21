import React from 'react'
import LargeCard from './LargeCard'

const LargeCards = () => {
    const orderState = [
        {
            title: "Today Orders",
            sales: 11000,
            color: "bg-green-600"
        },
        {
            title: "Yesterday Orders",
            sales: 13000,
            color: "bg-blue-600"
        },
        {
            title: "This Month Orders",
            sales: 30000000,
            color: "bg-orange-600"
        },
        {
            title: "All Time Sales",
            sales: 1141000,
            color: "bg-purple-600"
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-8'>
        {
            orderState.map((items, i) => {
                return(
                    <LargeCard className="bg-purple-600" data={items} key={i}/>
                )
            })
        }
    </div>
  )
}

export default LargeCards
