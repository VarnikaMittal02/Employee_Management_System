import React from 'react'
import newTask from '../TaskList/newTask'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'


const CreateTask = () => {

  const [userData, setUserData]= useContext(AuthContext)


  const [taskTitle, settaskTitle] = React.useState('')
  const [taskDesc, settaskDesc] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')


  const [task, settask] = useState({})

  // form se data render krne k liye--->

  // 1) function bnao submit handler or e k through data lo and  fr form m onsubmit ki help se function ko call kro
  // 2)  useState bnao sbhi input k liye or fr forms k input me jakr usestate ki value  pass kro and onchange me setstate ki madad se value set kro
  // 3)  submit handler me data ko console log kro ya sbko set kro 
  // 4)  ek usestate bnao or usme object ko pass kro jisme data ko store kro
  // 5)  fr submithandler ke andr setask (usestate) me object ki form me data set kro
  // 6)  ab local storage me data ko get kro parse krke
  // 7)  ab local storage me data ko set kro stringify krke

  const submitHandler = (e) => {
    e.preventDefault()

    // 5} data ko pass krdiya
    settask({ taskTitle, taskDesc, taskDate, category, active: false, newTask: true, failed: false, completed: false })

    // 6} local storage me data ko set kro parse krke
    const data = userData

     data.forEach(function (e) {
      if (assignTo == e.firstName) {
        e.tasks.push(task)
        e.taskCounts.task = e.taskCounts.task + 1
       
      }
    })
    
    setUserData(data)
console.log(data);


    // sbko khali krdo 
    settaskTitle('')
    settaskDesc('')
    setassignTo('')
    settaskDate('')
    setcategory('')
  }


  return (
    <div className=' p-20  w-full items-center bg-slate-800  mt-10 rounded text-white  ' >

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className=' flex-wrap flex w-full items-start justify-between '
      >


        <div className='w-1/2'>

          <div >
            <h3 className=' text-sm text-gray-300 mb-0.5'>Task Title</h3>

            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value)
              }}

              className='text-sm py-1 px-2 w-4/5 rounded  border-2 border-slate-600  mb-4' type="text" placeholder='Assign Task' />
          </div>



          <div>
            <h3 className=' text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded  border-2 border-slate-600  mb-4' type="date" />
          </div>




          <div>
            <h3 className=' text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input

              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value)
              }}

              className='text-sm py-1 px-2 w-4/5 rounded  border-2 border-slate-600  mb-4' type="text" placeholder='Employee name' />
          </div>




          <div>
            <h3 className=' text-sm text-gray-300 mb-0.5'>Category</h3>
            <input

              value={category}
              onChange={(e) => {
                setcategory(e.target.value)
              }}

              className='text-sm py-1 px-2 w-4/5 rounded  border-2 border-slate-600  mb-4' type="text" placeholder='Design, Deployment etc' />
          </div>

        </div>


        <div className='w-1/2'>
          <h3 className=' text-sm text-gray-300 mb-0.5'>Discription</h3>
          <textarea

            value={taskDesc}
            onChange={(e) => {
              settaskDesc(e.target.value)
            }}

            className='text-sm h-44 py-3 px-4 w-full rounded  border-2 border-slate-600  mb-4' name="" id="" placeholder='Describe discription of task ( Max 500 words)'> </textarea>
          <button className='bg-emerald-800 pX-5 py-2 rounded-4xl mt-1 text-white w-full'> Create Task</button>
        </div>





      </form>
    </div>
  )
}

export default CreateTask