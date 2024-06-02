'use client'; 

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
        <CountUp 
            decimals={2}
            decimal="."
            prefix="$"
            duration={1}
            end={amount} 
        />
    </div>
  )
}

export default AnimatedCounter