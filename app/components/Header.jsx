import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='profile_img' className='rounded-full w-32'/>
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hello, I am Wenduo Wang
          <Image src={assets.hand_icon} alt='hand_icon' className='w-6'/>
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Full-stack developer based in AU.
      </h1>

      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a beginner in full-stack development. I had a highly relevant internship experience at Soon Technology Group.
      </p>

      {/* contact me and download resume buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 

        <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
        Contact me
        <Image src={assets.right_arrow_white} alt='right_arrow' className='w-4'/></a>

        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
        My resume
        <Image src={assets.download_icon} alt='download_icon' className='w-4'/></a>
      </div>


    </div>
  )
}

export default Header