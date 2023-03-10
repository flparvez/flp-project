
import React, { useState } from 'react';

import { Alert } from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { useChangeUserPasswordMutation } from '../components/redux/UserAuthApi';
import { getToken } from '../components/redux/LocalStorageService';


const ChangePassword = () => {

  const [server_erorr, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [changeUserPassword] = useChangeUserPasswordMutation()
  const { access_token } = getToken()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await changeUserPassword({ actualData, access_token })
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      // console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById("password-change-form").reset();
    }

  };
  // const myData = useSelector(state => state.user)
  // console.log("Change Password", myData)
        
        
        return (
            <div>
                
    
                <section className="h-screen">
      <div className="container px-2 py-6 h-min">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form id='password-change-form' onSubmit={handleSubmit}>
            <div className="flex space-x-2 my-4 px-2 justify-center">
            <div>
            <h2 className="text-center mb-3 bg-sky-200  mt-4">Update Password</h2>
    
             
           
              </div>
          </div>
    
              <div className="mb-6">
                <input
                  type="password" name='password'
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="New Password"
                />
                { server_erorr.password ? <h2 className="text-white  text-sm bg-red-500  text-center">{server_erorr.password[0]}</h2> : ""  }

              </div>
      <div className="mb-6">
                <input
                  type="password" name='password2'
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="New Confirm Password"
                />
                { server_erorr.password2 ? <h2 className="text-white  text-sm bg-red-500  text-center">{server_erorr.password2[0]}</h2> : ""  }

              </div>
    
             
              { server_erorr.non_field_errors ?  
                <Alert color='red'>{server_erorr.non_field_errors} </Alert>
                 : ""}
             
              {server_msg.msg ? <Alert color='green'> {server_msg.msg}</Alert> : ''}
              
              <button
                type="submit"
                className="inline-block px-7 mt-2 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Update Password
              </button>
    
            
    
          
             
            </form>
          </div>
        </div>
      </div>
    </section>
            </div>
   
        
    );
};

export default ChangePassword;