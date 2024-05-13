
import React, { useContext, useState } from 'react'
import cube from '../assets/cube.png';
import square from '../assets/square.png';
import sphere from '../assets/sphere.png';
import torusImg from '../assets/torus.png';
import { MeshContext } from '../context/meshContext';



const SideBar = () => {

    // mesh modal
    const [meshModal, setMeshModal] = useState(false);
    const [textureModal, setTextureModal] = useState(false);
    

  


 // use context
 const { setTorus, setSphere, setBox, setPlane, setSelectedTexture } = useContext(MeshContext);

   // apply matcaps
   const applyMatcap = (textureUrl) => {
    setSelectedTexture(textureUrl);
    

 }

 const showTorus = () => {
    setTorus(true);
 }
    
  return (
<div className='absolute top-0 left-0 bg-[#435055] opacity-90   text-white w-full p-2 flex '>
       <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setMeshModal(!meshModal)}>Add</p>

      <div className='flex ' >
         {meshModal && <div className='flex absolute top-12 left-4 bg-white rounded-md gap-8 p-4'>
             <div className='flex flex-col items-center  gap-4' onClick={() => setBox(true)}>
               <img src = {cube} className='w-24' />
               <span className='text-center'>Cube</span>
               </div>

               <div className='flex flex-col items-center  gap-4' onClick={() => setPlane(true)}>
               <img src = {square} className='w-24' />
               <span className='text-center'>Plane</span>
               </div>

               <div className='flex flex-col items-center  gap-4' onClick={() => setSphere(true)}>
               <img src = {sphere} className='w-24' />
               <span className='text-center'>Sphere</span>
               </div>
               
               <div className='flex flex-col items-center  gap-4' onClick={showTorus}>
               <img src = {torusImg} className='w-24'  />
               <span className='text-center'>Torus</span>
               </div>

             
            </div>}

            <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setTextureModal(!textureModal)} >Textures</p>
           
           {
            textureModal && <div className='absolute top-16 left-4 flex gap-8 bg-black p-2 rounded-md'>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/15100F_241D1B_292424_2C2C27.jpg" onClick={() => applyMatcap('15100F_241D1B_292424_2C2C27')}  className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/167E76_36D6D2_23B2AC_27C1BE.jpg" onClick={() => applyMatcap('167E76_36D6D2_23B2AC_27C1BE')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/17395A_7EBCC7_4D8B9F_65A1B5.jpg" onClick={() => applyMatcap('17395A_7EBCC7_4D8B9F_65A1B5')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/191514_6D5145_4E3324_3B564D.jpg" onClick={() => applyMatcap('191514_6D5145_4E3324_3B564D')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1A2461_3D70DB_2C3C8F_2C6CAC.jpg" onClick={() => applyMatcap('1A2461_3D70DB_2C3C8F_2C6CAC')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1B1B1B_515151_7E7E7E_6C6C6C.jpg" onClick={() => applyMatcap('1B1B1B_515151_7E7E7E_6C6C6C')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1B1B1B_999999_575757_747474.jpg" onClick={() => applyMatcap('1B1B1B_999999_575757_747474')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1C70C6_09294C_0F3F73_52B3F6.jpg" onClick={() => applyMatcap('1C70C6_09294C_0F3F73_52B3F6')} className='rounded-full w-24 cursor-pointer'/>
              </div>
           }
      </div>

   
    </div>
  )
}

export default SideBar
