import React from 'react'
import ShimmerUICard from './ShimmerUICard'

function temp(){
  console.log("Hello");
}

function ShimmerUI() {

  return (
    <>
      <div className='flex justify-around flex-wrap'>
        {temp()}
        {Array(15).fill("").map((e, index) => (
          <ShimmerUICard key={index}/> 
        ))}
      </div>
    </>
  )
}

export default ShimmerUI