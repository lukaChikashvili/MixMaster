import React, { useContext, useState } from 'react'
import { MeshContext } from '../context/meshContext'
import { HexColorPicker } from 'react-colorful';

const Right = () => {
 
  const { updateMeshColor, meshColor, setMetalness, setRoughness, updatePlaneColor, planeColor, setPositionX,
          setPositionY, setPositionZ } = useContext(MeshContext);

  const [showRGB, setShowRGB] = useState(false);
  const [planeRgb, setPlaneRgb] = useState(false);


  const handleColorChange = (color) => {
      updateMeshColor(color);
  }

  const handlePlaneColor = (color) => {
     updatePlaneColor(color);

  }
  return (
    <div className='absolute right-12'>
       <h1 className='text-white p-6 cursor-pointer text-xl'>Choose mesh material</h1>
       <div className='flex gap-4 pb-6'>
          <div className='w-6 h-6 rounded-full bg-red-500 border-2 cursor-pointer duration-500 ease-in hover:border-white' onClick={() => handleColorChange('red')} ></div>
          <div className='w-6 h-6 rounded-full bg-blue-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('blue')}></div>
          <div className='w-6 h-6 rounded-full bg-green-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('green')}></div>
          <div className='w-6 h-6 rounded-full bg-purple-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('purple')}></div>
          <div className='w-6 h-6 rounded-full bg-orange-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('orange')}></div>
          <div className='w-6 h-6 rounded-full bg-pink-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleColorChange('pink')}></div>
        </div>
<div className='flex flex-col gap-4'>
     <div className='flex gap-4 items-center '>
       <span className='text-white underline underline-offset-4 '>Base color: </span> 
       <div className={`w-24 h-6  rounded-md cursor-pointer`} style={{backgroundColor: !meshColor ? 'white' : meshColor}} onClick={() => setShowRGB(!showRGB)}></div>
       
       </div>
       {showRGB && (
          <div className='mt-6'>
            <HexColorPicker color = {meshColor} onChange={updateMeshColor} />
          </div>
       )}

      <div className='flex gap-4 '>
       <span className='text-white underline underline-offset-4 '>Metalness: </span>
       <input type='number' className='w-24 rounded-md outline-none'  step={0.1} onChange={(e) => setMetalness(e.target.value)}  />
       
       </div>

       <div className='flex gap-4 '>
       <span className='text-white underline underline-offset-4 '>Roughness: </span>
       <input type='number' className='w-24 rounded-md outline-none'  step={0.01} onChange={(e) => setRoughness(e.target.value)}  />
       
       </div>

       </div>
       <h1 className='text-white p-6 cursor-pointer text-xl'>Choose plane material</h1>

       <div className='flex gap-4 pb-6'>
          <div className='w-6 h-6 rounded-full bg-red-500 border-2 cursor-pointer duration-500 ease-in hover:border-white' onClick={() => handlePlaneColor('red')} ></div>
          <div className='w-6 h-6 rounded-full bg-blue-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handlePlaneColor('blue')}></div>
          <div className='w-6 h-6 rounded-full bg-green-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handlePlaneColor('green')}></div>
          <div className='w-6 h-6 rounded-full bg-purple-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handlePlaneColor('purple')}></div>
          <div className='w-6 h-6 rounded-full bg-orange-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handlePlaneColor('orange')}></div>
          <div className='w-6 h-6 rounded-full bg-pink-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handlePlaneColor('pink')}></div>
        </div>

        <div className='flex gap-4 items-center '>
       <span className='text-white underline underline-offset-4 '>Base color: </span> 
       <div className={`w-24 h-6  rounded-md cursor-pointer`} style={{backgroundColor: !planeColor ? 'white' : planeColor}} onClick={() => setPlaneRgb(!planeRgb)}></div>
       
       </div>
       {planeRgb && (
          <div className='mt-6'>
            <HexColorPicker color = {planeColor} onChange={updatePlaneColor} />
          </div>
       )}


       <div className='flex flex-col gap-4'>
       <h1 className='text-white p-6 cursor-pointer text-xl'>control mesh size</h1>
       <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Position X: </h2>
       <input type='number'  className='w-24 rounded-md outline-none' onChange={(e) => setPositionX(e.target.value)}/>
       </div>

       <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Position Y: </h2>
       <input type='number'  className='w-24 rounded-md outline-none' onChange={(e) => setPositionY(e.target.value)}/>
       </div>

       <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Position Z: </h2>
       <input type='number'  className='w-24 rounded-md outline-none' onChange={(e) => setPositionZ(e.target.value)}/>
       </div>
       

       </div>



    </div>
  )
}

export default Right
