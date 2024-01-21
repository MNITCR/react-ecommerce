import { Layers } from 'lucide-react'
import React from 'react'

const LargeCard = ({data}) => {
  return (
    <div className={`rounded-lg text-white ${data.color} p-8 flex justify-center items-center flex-col`}>
        <Layers/>
        <h4>{data.title}</h4>
        <h2 className='lg:text-3xl text-2xl'>UGX.{data.sales}</h2>
    </div>
  )
}

export default LargeCard
