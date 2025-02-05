import React from 'react'

const Subheader = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#F5F5F5] h-auto w-full'>
      <h1 className='text-black font-bold helvetica-neue'>Hello Nike App</h1>
      <h2 className='text-black pt-2 helvetica-neue'>
        Download the app to access everything Nike.{" "}
        <a href="#" className='text-black underline font-bold pt-2 helvetica-neue'>
          Get Your Great
        </a>
      </h2>
    </div>
  )
}

export default Subheader
