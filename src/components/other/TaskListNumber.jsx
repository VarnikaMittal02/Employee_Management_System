import 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'   >
      <div className='px-6 py-9 w-[45%] bg-blue-400 rounded-xl'>
          <h2 className=' font-semibold text-3xl '>{data.taskCounts.newTask}</h2>
          <h3 className=' font-medium text-xl'>New Task</h3>

      </div>
      <div className='px-6 py-9 w-[45%] bg-green-500 rounded-xl'>
          <h2 className=' font-semibold text-3xl '>{data.taskCounts.active}</h2>
          <h3 className=' font-medium text-xl'>Active</h3>
         
      </div>
      <div className='px-6 py-9 w-[45%] bg-purple-400 rounded-xl'>
          <h2 className=' font-semibold text-3xl '>{data.taskCounts.completed}</h2>
          <h3 className=' font-medium text-xl'>Completed</h3>

      </div>
      <div className='px-6 py-9 w-[45%] bg-red-400 rounded-xl'>
          <h2 className=' font-semibold text-3xl '>{data.taskCounts.failed}</h2>
          <h3 className=' font-medium text-xl'>Failed</h3>

      </div>
    </div>
    
  )
}

export default TaskListNumber