import React from 'react'


function Item({ data }) {
  return (
    <div className='shadow-md bg-white text-center'>

      <p className='text-2xl p-10'>{data && data.map((ran) => (
    <div key={ran.Year}>
      
      <p>{ran.Nation}</p>
      <p>{ran.Population}</p>
    
      <p>{ran.Year}</p>
      
    </div>
  ))}</p>

    </div>
  )
}

export default Item