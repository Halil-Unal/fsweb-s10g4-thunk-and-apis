import React from 'react'


function Item({ data }) {
  return (
    data && <div className='shadow-md bg-white text-center'>

    <p className='text-2xl p-10'>
  <div key={data.Year}>
    
    <p>{data.Nation}</p>
    <p>{data.Population}</p>
  
    <p>{data.Year}</p>
    
  </div>
</p>

  </div>
  )
}

export default Item