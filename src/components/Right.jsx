import React, { useContext } from 'react'
import { MeshContext } from '../context/meshContext'

const Right = () => {
 
  const { updateMeshColor } = useContext(MeshContext);


  const handleColorChange = (color) => {
      updateMeshColor(color);
  }
  return (
    <div className='absolute right-12'>
       <h1 className='text-white p-6 cursor-pointer text-xl'>Choose mesh material</h1>
       <div className='flex gap-4'>
          <div className='w-6 h-6 rounded-full bg-red-500 border-2 duration-500 ease-in hover:border-white' onClick={() => handleColorChange('red')} ></div>
          <div className='w-6 h-6 rounded-full bg-blue-500 border-2 duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('blue')}></div>
          <div className='w-6 h-6 rounded-full bg-green-500 border-2 duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('green')}></div>
          <div className='w-6 h-6 rounded-full bg-purple-500 border-2 duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('purple')}></div>
          <div className='w-6 h-6 rounded-full bg-orange-500 border-2 duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('orange')}></div>
          <div className='w-6 h-6 rounded-full bg-pink-500 border-2 duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('pink')}></div>
        </div>

       <span className='text-white underline underline-offset-4'>Base color: </span>
       
    </div>
  )
}

export default Right
