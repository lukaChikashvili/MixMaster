import React, { useContext, useState } from 'react'
import { MeshContext } from '../context/meshContext'
import { HexColorPicker } from 'react-colorful';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ModeIcon from '@mui/icons-material/Mode';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Right = () => {
 
  const { updateMeshColor, meshColor, setMetalness, setRoughness, updatePlaneColor, planeColor, setPositionX,
          setPositionY, setPositionZ, setScaleX, setScaleY, setScaleZ, setRotateX, setRotateY, setRotateZ,
           addDuplicatedMesh , metalness, roughness, setImg, img, url, setUrl, background, updateBackgroundColor} = useContext(MeshContext);

  const [showRGB, setShowRGB] = useState(false);
  const [showRGB2, setShowRGB2] = useState(false);
  const [planeRgb, setPlaneRgb] = useState(false);
  
  const [location, setLocation] = useState(false);
  const [scale, setScale] = useState(false);
  const [rotation, setRotation] = useState(false);



  const handleColorChange = (color) => {
      updateMeshColor(color);
  }

  const handlePlaneColor = (color) => {
     updatePlaneColor(color);

  }

  const handleBackground = (color) => {
     updateBackgroundColor(color);
  }




  const handleDuplicate = () => {
    addDuplicatedMesh({
      position: [2, 3, 0],
      geometry: <boxGeometry />,
      material: (
        <meshStandardMaterial
          color={meshColor} 
          metalness={metalness}
          roughness={roughness}
        />
      ),
    });


  }
  return (
    <div className='absolute right-4'>
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
       <h1 className='text-white mt-8 cursor-pointer text-xl ' onClick={() => setLocation(!location)}>control mesh location <ArrowDropDownIcon /></h1>
{location && (
<>
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
</>
)}
       
      
       </div>

       <h1 className='text-white mt-4  cursor-pointer text-xl' onClick={() => setScale(!scale)}>control mesh scale <ArrowDropDownIcon /></h1>

{scale && (
  <div className='flex flex-col gap-4 pt-4'>

   <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Scale X: </h2>
       <input type='number'  className='w-24 rounded-md outline-none' onChange={(e) => setScaleX(e.target.value)}/>
       </div>

       <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Scale Y: </h2>
       <input type='number'  className='w-24 rounded-md outline-none' onChange={(e) => setScaleY(e.target.value)}/>
       </div>

       <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Scale Z: </h2>
       <input type='number'  className='w-24 rounded-md outline-none' onChange={(e) => setScaleZ(e.target.value)}/>
       </div>
       
  </div>
)}


<h1 className='text-white mt-4  cursor-pointer text-xl' onClick={() => setRotation(!rotation)}>control mesh rotation <ArrowDropDownIcon /></h1>

{rotation && (
  <div className='flex flex-col gap-4 pt-4'>

   <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Rotate X: </h2>
       <input type='number' step ={1.5} className='w-24 rounded-md outline-none' onChange={(e) => setRotateX(e.target.value)}/>
       </div>

       <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Rotate Y: </h2>
       <input type='number' step ={1.5} className='w-24 rounded-md outline-none' onChange={(e) => setRotateY(e.target.value)}/>
       </div>

       <div className='flex gap-4'>
       <h2 className='text-white  underline underline-offset-4'>Rotate Z: </h2>
       <input type='number' step ={1.5} className='w-24 rounded-md outline-none' onChange={(e) => setRotateZ(e.target.value)}/>
       </div>
       
  </div>
)}

<h1 className='text-xl text-white mt-4 flex items-center gap-4'>Duplicate mesh <ModeIcon className='cursor-pointer duration-500 ease hover:text-green-500' onClick = {handleDuplicate} /></h1>
      
<h1 className='text-xl text-white mt-4 flex items-center gap-4'>Set image as a texture <InsertPhotoIcon className='cursor-pointer duration-500 ease hover:text-green-500' onClick = {() => setImg(!img)} /></h1>

{img && <div>
      <input type='text' className='outline-none rounded-md mt-4' placeholder='Enter image url' onChange={(e) => setUrl(e.target.value)} />
  </div>}

  
  <div className='flex gap-4 items-center '>
   <h1 className='text-xl text-white mt-4 flex items-center gap-4'>Background color:  </h1>
       <div className={`w-24 h-6  rounded-md cursor-pointer mt-4`} style={{backgroundColor: !background ? 'white' : background}} onClick={() => setShowRGB2(!showRGB2)}></div>
       
       </div>

       <div className='flex gap-4 pb-6 mt-4'>
          <div className='w-6 h-6 rounded-full bg-red-500 border-2 cursor-pointer duration-500 ease-in hover:border-white' onClick={() => handleBackground('red')} ></div>
          <div className='w-6 h-6 rounded-full bg-blue-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleBackground('blue')}></div>
          <div className='w-6 h-6 rounded-full bg-green-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleBackground('green')}></div>
          <div className='w-6 h-6 rounded-full bg-purple-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleBackground('purple')}></div>
          <div className='w-6 h-6 rounded-full bg-orange-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleBackground('orange')}></div>
          <div className='w-6 h-6 rounded-full bg-pink-500 border-2 cursor-pointer duration-500 ease-in hover:border-white'  onClick={() => handleBackground('pink')}></div>
        </div>

       {showRGB2 && (
          <div className='mt-6'>
            <HexColorPicker color = {background} onChange={updateBackgroundColor} />
          </div>
       )}
    </div>
  )
}

export default Right
