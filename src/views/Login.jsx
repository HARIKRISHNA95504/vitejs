import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer,toast } from "react-toastify";
function login(){
    const {register,handleSubmit,formState:{errors},watch} = useForm()
    const RegisteredEmail = watch('email')
    const navigate = useNavigate()
   
    const loginUser= async (data)=>{
        const {email}=data
      try{
        const response = await axios.get('http://localhost:4000/registerUsers')
        const users =response.data;
        const user = users.find(user=>user.email ===email);
        if(user.email !== email){
            console.log('successfully log in....')
        }else{
            toast.success('successfully loggged In')
            navigate('/Products')
            console.log('user logged in ',user)
        }
        

        
      }catch(error){
        toast.error('unable to loggedIn')
      }
      
    }
    return(
        <>
         <div>
            <h1 className="text-center text-xl font-bold text-orange-500">Login Page</h1>
            <div className=" flex items-center justify-center">
                <form className="border shadow-lg pl-4 pr-4 pt-3 pb-3 mt-5" onSubmit={handleSubmit(loginUser)}>
                    <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 pb-3">Email</label>
                        <div className="flex items-center ">
                            <input type="email" name="email" id="email" autoComplete="email" className="py-2 px-12  border"placeholder="enter register email"
                            {...register('email',{required:{value:true,message:'Email Is Required'}})}/>
                        </div>
                        <p className="text-red-500">{errors.email?.message}</p>
                    </div>
                    <div className="w-full pt-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900 pb-3">Password</label>
                        <div className="flex items-center ">
                            <input type="password" name="password" id="password" autoComplete="password" className="py-2 px-12  border"placeholder="enter your password"
                            {...register('password',{required:{value:true,message:'Password Is Required'}})}/>
                        </div>
                        <p className="text-red-500 ">{errors.password?.message}</p>
                    </div>
                    <div className="mt-8 mb-5">
                        <button type="submit" className="text-white bg-orange-500 py-1.5 w-full border-none rounded">SignIn</button>
                    </div>
                    <h1 className="text-center pb-2 font-semibold">OR</h1>
                    <div>
                        <button className="text-white bg-green-500 py-1.5 w-full border-none rounded" ><Link to={`/register`}>SignUp</Link></button>
                        <h1></h1>
                    </div>
                </form>
            </div>
            <ToastContainer/>
         </div>
        </>
    )
}
export default login;