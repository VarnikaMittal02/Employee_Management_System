import React, { useContext, useEffect, useState } from 'react'
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import './index.css';
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
   // useeffect use to run side effects(function) with the main stack(work)
  
  
  const [user, setUser] = useState(null);

  const[LoggedInUserData, setLoggedInUserData] = useState(null);
 
  // authcontext coming from authprovider
  const [userData,setUserData] = useContext(AuthContext)
  // console.log(authData.employees.find(e))
  

  
  useEffect(() => {
    //  if(authData){
      const loggedInUser= localStorage.getItem("loggedInUser")
    
      // if loggedInUser available in local storage then set user role 
     if( loggedInUser){
      const userData= JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
     }
    
  },[]); 

  

    // abhi authData ki help se data check krege ki vo admin h ya user
  const handleLogin=(email,password)=>{
   
    if( email=="admin@me.com" && password =='123'){
      // const adminUser={role:'admin'}
      setUser('admin')
 
      // local storage m loggedinuser m admin chlajayega
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))

    // }else if ( email=="user@me.com" && password=='123'){
    }else if ( userData ){
      const employee = userData.find((e)=> email==e.email && e.password==password)
      if( employee){
        setUser('employee')
        setLoggedInUserData(employee)
      //   const employeeUser={role:'employee' , data:employee};
      // setUser(employeeUser)
      // setUserLoggedIn(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee }))
      }
    //  }
  }else{
     alert("invalid email or password")
  }
  } 


  // if user is not null then show login else show nothing
  // if user is admin then show admin dashboard else show employee dashboard
  return (
    <>   
   {!user ? <Login handleLogin ={handleLogin}/> :''}
     
   {user == 'admin' ? <AdminDashboard changeUser={setUser}  /> :(user== 'employee' ? <EmployeeDashboard  changeUser={setUser} data={LoggedInUserData} />:null )  }

  
      {/* <EmployeeDashboard/> */}
      {/* <Header/> */}
      {/* <AdminDashboard/> */}

    </>
  );
};


export default App;

