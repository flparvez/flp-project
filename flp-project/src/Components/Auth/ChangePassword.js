
import React, { useState } from 'react';
import {   useNavigate } from 'react-router-dom';
import { Alert } from "@material-tailwind/react";
const ChangePassword = () => {
    const [error, seterror] = useState({
        status: false,
        msg: "",
        type: ""
      })
    
      const navigate = useNavigate()
        
        const handleSubmit =(e)=>{
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const actualData = {
            password: data.get('password'),
            Cpassword: data.get('Cpassword'),
            
          }
         
          if(actualData.password && actualData.Cpassword){
            if(   actualData.password === actualData.Cpassword ){
                console.log(actualData)
                document.getElementById('send-password').reset()
                seterror({
                  status: true,
                  msg: "Password Change Succesfully Redirecting to Login Page",
                  type: "green"
                })

                setTimeout(()=>{
                    navigate("/profile")
                },3000)
                
              }else{
                seterror({
                  status: true,
                  msg: "Password Not Matched",
                  type: "orange"
                })
              
              }

          }else{
            seterror({
              status: true,
              msg: "All Fields Are Required",
              type: "orange"
            })
          
          }
    
    console.log(error)
           }
        
        return (
            <div>
                
    
                <section className="h-screen">
      <div className="container px-2 py-6 h-min">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
         
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form id='send-password' onSubmit={handleSubmit}>
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
              </div>
      <div className="mb-6">
                <input
                  type="password" name='Cpassword'
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="New Confirm Password"
                />
              </div>
    
             
            
    
             
              { error.status ? <Alert color={error.type}  >{error.msg}</Alert> : '' 
            }
              
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