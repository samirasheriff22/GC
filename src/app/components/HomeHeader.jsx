import Link from 'next/link';
import React from 'react'
import {TbGridDots} from "react-icons/tb"

export default function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>

        <div className="flex space-x-4 items-center">
            <Link href="https://openai.com/blog/chatgpt"  className='hover:underline'>Gmail</Link>
            <Link href="https://www.google.co.in/imghp?hl=en&tab=ri&authuser=0&ogbl"  className='hover:underline '> Images</Link>
            <TbGridDots className="bg-transparent 
            hover:bg-gray-200 rounded-full text-4xl
            p-2"/>
            <button className='bg-blue-500 text-white px-6 py-2
            font-medium rounded-medium hover:brightness-105 hover:shadow-md
            transition-shadow'>Sign in</button>
            </div>
    </header> 
  ); 
}
