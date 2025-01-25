import {useForm} from "react-hook-form"
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
function Register(){
    const {register,handleSubmit,formState:{errors},watch}=useForm()
    const passwordValue = watch('password')
    const navigate = useNavigate()
    const registerUser = async (formValues)=>{
        try{
        const response = await axios.post('http://localhost:4000/registerUsers',formValues)
        console.log(response)
            toast.success('register successfully')
            navigate('/login')
        }catch(error){
                toast.error('Unable to register');
        }
    }
    
    return(
        <>
          <div>
            <h1 className="text-center font-bold text-xl">Register Page</h1>
            <div className="min-h-screen flex items-center justify-center">
                    <form onSubmit={handleSubmit(registerUser)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                        <div className="sm:col-span-2 w-full">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">First Name</label>
                            <div className="mt-2 w-full">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 ">
                                    <input type="text" autoComplete="firstName" name="firstName" id="firstName" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm" placeholder="Enter your First Name" {...register('firstName',{required:{value:true,message:"firstName is required"}})}/>
                                </div>
                                <p className="text-red-600">{errors.firstName?.message}</p>
                            </div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">Last Name</label>
                            <div className="mt-2 w-full">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 ">
                                    <input type="text" autoComplete="lastName" name="lastName" id="lastName" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm" placeholder="Enter your Last Name"
                                    {...register('lastName',{required:{value:true,message:"lastName is required"}})}/>
                                </div>
                                <p className='text-sm text-red-500'>{errors.lastName?.message}</p>
                            </div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                            <div className="mt-2 w-full">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 ">
                                    <input type="email" autoComplete="email" name="email" id="email" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm" placeholder="Enter your Email"
                                    {...register('email',{required:{value:true,message:"email is required"}})}/>
                                </div>
                                <p className='text-sm text-red-500'>{errors.email?.message}</p>
                            </div>
                            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-900">MobileNo</label>
                            <div className="mt-2 w-full">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input type="number" autoComplete="mobileNo" name="mobileNo" id="mobileNo" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900   sm:text-sm" placeholder="Enter your Mobile No"
                                    {...register('mobileNo',{required:{value:true,message:"mobileNo is required"}})}/>
                                </div>
                                <p className='text-sm text-red-500'>{errors.mobileNo?.message}</p>
                            </div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                            <div className="mt-2 w-full">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 ">
                                    <input type="password" autoComplete="password" name="password" id="password" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm" placeholder="Enter your Password"
                                    {...register('password',{required:{value:true,message:"Password is required"},pattern:{ value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Incorrect password format'}})}/>
                                </div>
                                <p className='text-sm text-red-500'>{errors.password?.message}</p>
                            </div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">ConfirmPassword</label>
                            <div className="mt-2 w-full">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 ">
                                    <input type="confirmPassword" autoComplete="confirmPassword" name="confirmPassword" id="confirmPassword" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm" placeholder="Enter your confirmPassword"
                                    {...register('confirmPassword', { required: { value: true, message: 'Confirm Password is required'}, validate:  (confirmPasswordValue) => passwordValue === confirmPasswordValue || 'Passwords does not match'})}/>
                                </div>
                                <p className='text-sm text-red-500'>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>
                        <button type="submit" className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-lg ">SignUp</button>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}
export default Register;