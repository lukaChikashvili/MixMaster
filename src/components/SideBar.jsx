
import React, { useContext, useState } from 'react'
import cube from '../assets/cube.png';
import square from '../assets/square.png';
import sphere from '../assets/sphere.png';
import torusImg from '../assets/torus.png';
import { MeshContext } from '../context/meshContext';



const SideBar = () => {

    // mesh modal
    const [meshModal, setMeshModal] = useState(false);

 // use context
 const { setTorus, setSphere, setBox } = useContext(MeshContext);

 const showTorus = () => {
    setTorus(true);
 }
    
  return (
<div className='absolute top-0 left-0 bg-[#435055] opacity-50  text-white w-full p-2 '>
       <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setMeshModal(!meshModal)}>Add</p>

      <div>
         {meshModal && <div className='flex gap-8 p-4'>
             <div className='flex flex-col items-center  gap-4' onClick={() => setBox(true)}>
               <img src = {cube} className='w-24' />
               <span className='text-center'>Cube</span>
               </div>

               <div className='flex flex-col items-center  gap-4'>
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
      </div>
    </div>
  )
}

export default SideBar
