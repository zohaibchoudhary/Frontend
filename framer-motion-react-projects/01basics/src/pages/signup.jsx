import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useNavigate } from "react-router-dom";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@/schemas/signupSchema";
import axios from "axios";


export default function SignUp() {

	const navigate = useNavigate()
	const [isSubmiting, setIsSubmiting] = useState(false)

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data) => {
    setIsSubmiting(true)
		
		try {
			const response = await axios.post(`/api/v1/users/register`, data)
			console.log(response.data);
			navigate('/login')
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmiting(false)
		}
  }

	return (
		<section>
			<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
				<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
					<h2 className="text-center text-2xl font-bold leading-tight text-black">
						Sign up to create account
					</h2>
					<p className="mt-2 text-center text-base text-gray-600">
						Already have an account?{" "}
						<a
							href="#"
							title=""
							className="font-medium text-black transition-all duration-200 hover:underline"
						>
							Sign In
						</a>
					</p>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input placeholder="Enter your username..." {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="Enter your email..." {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder="Enter your password..." {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button 
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-dark"
              >Register</Button>
						</form>
					</Form>
				</div>
			</div>
		</section>
	);
}
