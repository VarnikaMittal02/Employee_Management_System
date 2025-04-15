import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, usetUserData]= useContext(AuthContext)

    // creating function to map through the data (employee name that are assigned task by admin) and display it in the UI
    return (
        <div id='tasklist' className='bg-slate-800 p-10 mt-5  h-78 rounded'>
       
         <div  className='bg-emerald-800  px-4 py-2 text-white mt-2  h-12  flex justify-between rounded'>
         
         <h3 className='w-1/5  '>Employee Name</h3>
         <h3 className='w-1/5  '>New Tasks</h3>
         <h5 className='w-1/5  '>Active Task</h5>
         <h5 className='w-1/5  '>Completed</h5>
         <h5 className='w-1/5  '>Failed</h5>
    </div>

     <div id='tasklist' className='h-[80%] overflow-auto'>
      {userData.map(function( e, idx){
            return  <div key={idx} className='bg-slate-800 text-white border-2 border-emerald-600   px-4 py-2  mt-2   flex justify-between rounded'>
         
         <h3 className='w-1/5 text-w  '>{e.firstName}</h3>
         <h3 className='w-1/5  '>{e.taskCounts.newTask}</h3>
         <h5 className='w-1/5  '>{e.taskCounts.active}</h5>
         <h5 className='w-1/5  '>{e.taskCounts.completed}</h5>
         <h5 className='w-1/5 '>{e.taskCounts.failed}</h5>
           </div>
           })}
           </div>

           
          

            {/* <div className='bg-green-400 px-4 py-2 mt-2  flex justify-between rounded'>
                <h3>Vaani</h3>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
            */}


        </div>
    )
}

export default AllTask