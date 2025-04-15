import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[40%] overflow-x-auto mt-10 flex items-center justify-start gap-5 flex-nowrap '>

             {/* <NewTask/>
            <AcceptTask />
           <CompleteTask/>
           <FailedTask/> */}


{/* "active": true,
              "newTask": false,
              "completed": false,
              "failed": false, */}
{data.tasks.map((e, idx)=>{
    if( e.active){
        return <AcceptTask key={idx} data={e}/>
    }

    if(e.newTask){
        return <NewTask key={idx} data={e}/>
    }
    if( e.completed){
        return <CompleteTask key={idx} data={e}/>
    }
    if(e.failed){
        return <FailedTask key={idx} data={e}/>
    }


})}
            


           
          

            {/* <div className='flex-shrink-0 h-[90%] w-[300px] p-5 bg-slate-800 rounded-xl'>

                <div className='flex justify-between items-center'>
                    <h3 className=' bg-emerald-800 px-4 py-1 text-sm rounded-sm'> High</h3>
                    <h4 className='text-sm'> 20 feb 2024</h4>
                </div>

                <h2 className='text-xl mt-5 font-semibold'> Make a youtube vedio</h2>
                <p className='text-sm mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt saepe earum reiciendis itaque aperiam.</p>
            </div> */}



        </div>
    )
}

export default TaskList