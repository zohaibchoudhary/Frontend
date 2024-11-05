import React, {useState} from 'react'
import {Input , Button} from "../index"
import {useForm} from "react-hook-form"


function Signup() {
    const  [error, setError] = useState('')
    const {register, handleSubmit} = useForm()
  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto mt-8 max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2">
                <div className='ml-[33%] max-w-[100px] font-semibold text-[#0865FB] text-3xl inline'>VideoTube</div>
            <div className="m-3 ml-[40%] text-2xl max-w-[100px]">
                Login
            </div>
            <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have an account?&nbsp;signup
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form>
            <div className='space-y-5'>
            <Input
            label="Email"
            type="email"
            {...register("email", {
                required: true,
                validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
            })}
            />
            <Input
            label="Password"
            type="password"
            {...register("password", {
                required: true,})}
            />
            <Button type="submit" className="w-[96%] ml-2">
            Login
            </Button>
            </div>   
            </form>     
            </div>
        </div>    
    </div>
  )
}

export default Signup
