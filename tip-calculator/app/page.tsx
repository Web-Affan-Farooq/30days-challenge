"use client";
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Input } from '@/components/ui/input';

const Home = () => {
    const [amount, setamount] = useState<string>();
  const [tip, setTip] = useState<string>();

    const handleCalculation = (event:React.MouseEvent<HTMLButtonElement>) => {
    toast.custom(<p className='bg-black text-[15px] py-[10px] px-[20px] rounded-md text-white'>{`Tip : ${Number(amount) * Number(tip) /100}`} Rs /-</p>,{
      duration:500,
      position:"top-left"
    })
  }
  return (
    <div className='relative top-20 w-[360px] m-auto rounded-lg p-[20px] bg-blue text-white flex flex-col flex-nowrap gap-5 max-sm:w-[90vw]'>
      <Toaster/>
      <h1 className='font-bold text-2xl'>Tip calculator</h1>
      <Input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
        setamount(e.target.value)
      }}/>
      <Input type='text' placeholder='Enter tip in percentage' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
        setTip(e.target.value)
      }}/>
      <div>      <button type="button" className='px-[20px] py-[10px] font-semibold text-black bg-yellow rounded-lg ' onClick={handleCalculation}>Calculate</button></div>
    </div>
  )
}

export default Home;