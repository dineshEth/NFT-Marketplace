import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-evenly'>
      <div className='my-[15px]'>
        <span className='text-[#BF8E0F]'>SD</span>
        <span className='text-[#81C710]'>oeXo</span>
      </div>
      <div className='gap-5'>
        <span className='text-slate-600'>Marketplace</span>
        <span className='text-slate-600'>Profile</span>
      </div>
      <div className='gap-4'>
        <button className='bg-[#54098E] rounded-[10px] text-[#fffff] w-[320px] h-[73px]'>Create NFT</button>
        <button className='bg-[#81C710] rounded-[10px] text-[#00000] w-[320px] h-[73px]'>Connect</button>
      </div>
    </nav>
  )
}

export default Navbar;