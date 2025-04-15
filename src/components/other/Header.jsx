import 'react';

import { useState } from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const Header = (props) => {

// const[username, setUsername]= useState('')

// if(!data){
//     setUsername('admin')
// }else{
//     setUsername(data.firstName)
// }


const logout=()=>{

localStorage.setItem('loggedInUser', '' )
// console.log(props.changeUser);
props.changeUser('')
// window.location.reload()
}

    return (
        // console.log(data),

        <div className='flex items-end justify-between '>
            <h1 className='text-xl font-medium'>Hello <br/> <span  className='text-2xl font-semibold' > UserName👋</span>  </h1>
            <button onClick={logout} className='bg-emerald-800 px-3 py-1.5 rounded-sm text-sm text-white'> Log Out</button>
        </div>
    );
};

export default Header;