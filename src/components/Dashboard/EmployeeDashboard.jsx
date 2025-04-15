import React from "react";
import Header from "../other/Header";
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';



const EmployeeDashboard = (props) => {

    return (
        <div className=' p-7 h-screen text-white'>
         {/* <h1>{data.id}</h1> */}
            <Header changeUser={props.changeUser} data={props.data}  />
            <TaskListNumber data={props.data} />
            <TaskList data={props.data} />
        </div>
    );
};

export default EmployeeDashboard;