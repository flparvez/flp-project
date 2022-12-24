import React from 'react';
import ChangePassword from './Auth/ChangePassword';

const Dashboard = () => {
    const handleLogOut=()=>{
        console.log("Logout Clicked");
        
    }
    return (
        <div className='w-[100%] flex'>

       
        <div className='w-[70%]'>
            
            <ChangePassword/>
            </div>

            <div className='text-left w-[30%] bg-blue-gray-5001 py-4'>
            <h2>Email:Flparvez23@gmail.com</h2>
            <h2>Name:Md Parvez</h2>
            <button
            type="submit"
            className="inline-block px-4 mt-2 py-3 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light" onClick={handleLogOut}
          >
            Logout
          </button>
    
    
            </div>
        </div>
    );
};

export default Dashboard;