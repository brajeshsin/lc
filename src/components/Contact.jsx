import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
      const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
      }
      try {
        await axios.post("https://getform.io/f/bejydyza",userInfo);
        toast.success("Your message has been sent successfully.")
      } catch (error) {
        console.log(error);
        toast.error("Please try after some time.")
      }
    };
  return (
    <>
    <div
    name="Contacts"
    className = "max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16">
    <h1 className='text-3xl mb-3 font-bold'>Contact me</h1>
    <span>
    Please fill out the form below to contact me
    </span>
    <div className='flex flex-col items-center justify-center mt-7'>
    <form
    onSubmit={handleSubmit(onSubmit)}
    // action="https://getform.io/f/bejydyza"
    // method="POST"
    className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
    <h1 className='text-xl font-semibold'>
    Send your message
    </h1>
    <div className='flex flex-col mb-4'>
    <label className='block text-gray-700'>Full Name</label>
    <input 
    {...register("name", { required: true })}
    className='border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none'
    type="text"
    id="name"
    name='name'
    placeholder='Enter your full name'
    />
      {errors.name && <span className='text-red-600'>Enter your name.</span>}
    </div>
    <div className='flex flex-col mb-4'>
    <label className='block text-gray-700'>Email Address</label>
    <input 
     {...register("email", { required: true })}
    className='border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none'
    type="text"
    id="email"
    name='email'
    placeholder='Enter your email'
    />
    {errors.email && <span className='text-red-600'>Enter email.</span>}
    </div>
    <div className='flex flex-col mb-4'>
    <label className='block text-gray-700'>Write Your Query</label>
    <textarea 
     {...register("message", { required: true })}
    className='border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none'
    type="text"
    id="message"
    name='message'
    placeholder='Type message...'
    />
   {errors.message && <span className='text-red-600'>This field is required.</span>}
    </div>
    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Contact
