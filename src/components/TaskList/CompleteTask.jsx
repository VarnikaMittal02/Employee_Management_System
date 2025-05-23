import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-[90%] w-[300px] p-5 bg-slate-800 rounded-xl'>

    <div className='flex justify-between items-center'>
        <h3 className=' bg-emerald-800 px-4 py-1 text-sm rounded-sm'> {data.category}</h3>
        <h4 className='text-sm'> {data.taskDate}</h4>
    </div>
    
    <h2 className='text-xl mt-5 font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-3'>{data.taskDescription}  </p>


    <div className=' mt-4'>
        <button className='bg-purple-400 px-2 py-1 rounded-sm w-full text-sm text-white'> Complete</button>
      
    </div>

</div>
  )
}

export default CompleteTask