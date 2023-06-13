import React from 'react'
import HomeHeader from './components/HomeHeader'
import Image from 'next/image'
import HomeSearch from './components/HomeSearch'


export default function home() {
  return (
    <>
    <HomeHeader />
    <div className="flex flex-col items-center mt-24">
      <Image 
      width="300"
      height="100"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"/>
      <HomeSearch/>
    </div>
    </> 
  )
}
