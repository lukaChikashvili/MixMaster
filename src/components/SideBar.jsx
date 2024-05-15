
import React, { useContext, useState } from 'react'
import cube from '../assets/cube.png';
import square from '../assets/square.png';
import sphere from '../assets/sphere.png';
import torusImg from '../assets/torus.png';
import { MeshContext } from '../context/meshContext';
import LanguageIcon from '@mui/icons-material/Language';
import { Tooltip } from '@mui/material';




const SideBar = () => {

    // mesh modal
    const [meshModal, setMeshModal] = useState(false);
    const [textureModal, setTextureModal] = useState(false);
    
// more textures
const [moreTextures, setMoreTextures] = useState(false);

const [active, setActive] = useState(null);
  


 // use context
 const { setTorus, setSphere, setBox, setPlane, setSelectedTexture, img, url,
   setWireframe, wireframe, animation, setAnimation, setRotationAnimX ,
  setRotationAnimY, setRotationAnimZ, setPositionAnimX, setPositionAnimY, 
  setPositionAnimZ, setAnimSpeed, animSpeed} = useContext(MeshContext);

   // apply matcaps
   const applyMatcap = (textureUrl) => {
    setSelectedTexture(textureUrl);
    

 }

 const showTorus = () => {
    setTorus(true);
 }

 // show more texture modal
 const showMoreTextures = () => {
  setMoreTextures(true);
  setTextureModal(false);
 }

 const handleActive = (index) => {
    setActive(index);

    if(index === 1) {
      setRotationAnimX(true);
      setRotationAnimY(false);
      setRotationAnimZ(false);
    }

    if(index === 2) {
      setRotationAnimX(false);
      setRotationAnimY(true);
      setRotationAnimZ(false);
    }

    if(index === 3) {
      setRotationAnimX(false);
      setRotationAnimY(false);
      setRotationAnimZ(true);
    }

    if(index === 4) {
      setPositionAnimX(true);
      setPositionAnimY(false);
      setPositionAnimZ(false);
    }

    if(index === 5) {
      setPositionAnimX(false);
      setPositionAnimY(true);
      setPositionAnimZ(false);
    }

    if(index === 6) {
      setPositionAnimX(false);
      setPositionAnimY(false);
      setPositionAnimZ(true);
    }
   
 }


 // close modals
 const closeModals = () => {
   setAnimation(false);
   
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
              <h2 className='mt-8 cursor-pointer font-bold underline underline-offset-4 duration-500 ease-in hover:decoration-wavy' onClick={showMoreTextures}>More textures</h2>
              </div>
           }


      </div>
    {moreTextures && <div className='absolute  bg-black p-12   flex flex-wrap gap-24 rounded-md  overflow-auto max-h-56 w-4/5 ml-28 textureModal ' style={{marginTop: '480px'}} >
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/5A492B_DEC583_987D4D_AC9C74.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('5A492B_DEC583_987D4D_AC9C74')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/5A643B_454D2C_393F25_202315.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('5A643B_454D2C_393F25_202315')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/5B4CBC_B59AF2_9B84EB_8F78E4.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('5B4CBC_B59AF2_9B84EB_8F78E4')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/5B5428_C5A052_A28B46_ADA752.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('5B5428_C5A052_A28B46_ADA752')}/>

         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/5C045C_BD0DBD_930493_A404A4.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('5C045C_BD0DBD_930493_A404A4')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/5C5C5C_A2A2A2_8C8C8C_848484.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('5C5C5C_A2A2A2_8C8C8C_848484')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/5D5D5D_CDCDCD_232323_ACACAC.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('5D5D5D_CDCDCD_232323_ACACAC')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/254FB0_99AFF0_6587D8_1D3279.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('254FB0_99AFF0_6587D8_1D3279')}/>

         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/27222B_677491_484F6A_5D657A.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('27222B_677491_484F6A_5D657A')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/293534_B2BFC5_738289_8A9AA7.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('293534_B2BFC5_738289_8A9AA7')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/293D21_ABC692_73B255_667C5C.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('293D21_ABC692_73B255_667C5C')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/2A2A2A_B3B3B3_6D6D6D_848C8C.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('2A2A2A_B3B3B3_6D6D6D_848C8C')}/>

         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/2E763A_78A0B7_B3D1CF_14F209.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('2E763A_78A0B7_B3D1CF_14F209')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/2F3747_6A7C9E_54637F_62748B.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('2F3747_6A7C9E_54637F_62748B')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/300706_888576_822821_876E79.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('300706_888576_822821_876E79')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/312C34_A2AAB3_61656A_808494.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('312C34_A2AAB3_61656A_808494')}/>

         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/313131_BBBBBB_878787_A3A4A4.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('313131_BBBBBB_878787_A3A4A4')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/331A0B_B17038_7D4E28_5B351A.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('331A0B_B17038_7D4E28_5B351A')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/34AB94_36DFC1_19F9EB_6C6E62.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('34AB94_36DFC1_19F9EB_6C6E62')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/385264_A1D3E2_86ADC1_6E94A8.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('385264_A1D3E2_86ADC1_6E94A8')}/>

         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/3A3329_C9B090_928069_A9957A.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('3A3329_C9B090_928069_A9957A')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/3B3C3F_DAD9D5_929290_ABACA8.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('3B3C3F_DAD9D5_929290_ABACA8')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/3E3E3E_AEAEAE_848484_777777.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('3E3E3E_AEAEAE_848484_777777')}/>
         <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/422509_C89536_824512_0A0604.jpg" className='rounded-full w-36 cursor-pointer' onClick={() => applyMatcap('422509_C89536_824512_0A0604')}/>
         <span className='absolute text-white left-4 top-4 text-xl cursor-pointer' onClick={() => setMoreTextures(false)}>X</span>
    </div>}
      

     {img && <div className='absolute right-4 top-12'>
         <p className='text-center underline underline-offset-8 duration-500 ease-in hover:decoration-wavy'>Image preview</p>
         <img src = {url} className='w-36 h-24 object-cover mt-4 rounded-md shadow-lg'/>
      </div>}

      <Tooltip title= "Wireframe mode" >
      <LanguageIcon className='absolute right-4 cursor-pointer opacity-50 duration-500 ease hover:opacity-100' onClick = {() => setWireframe(!wireframe)}/>
      </Tooltip>

      <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setAnimation(true)}>Animation</p>

      {animation && <div className='absolute mt-12 right-4'>
        
           <p className='text-center'>Animation</p>
           <div className='bg-black opacity-70 p-4 rounded-md flex flex-col gap-2'>
           <span className='absolute right-4 top-8 cursor-pointer' onClick={closeModals}>X</span>
            <div className='flex gap-4'>
              <span> speed:</span>
              <input type='number' step={0.01} value = {animSpeed} onChange={(e) => setAnimSpeed(e.target.value)}  className='w-24 outline-none text-black' />
              </div>

              <div className='flex gap-4'>
              <span onClick={() => handleActive(1)} className={active === 1 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>Rotate on X</span>
              <span onClick={() => handleActive(2)} className={active === 2 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>Rotate on Y</span>
              <span onClick={() => handleActive(3)} className={active === 3 ? 'active' : '' } style={{cursor: 'pointer', padding: '4px'}}>Rotate on Z</span>
             
            
              </div>

              <div className='flex gap-4'>
              <span onClick={() => handleActive(4)} className={active === 4 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>Position X</span>
              <span onClick={() => handleActive(5)} className={active === 5 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>Position Y</span>
              <span onClick={() => handleActive(6)} className={active === 6 ? 'active' : '' } style={{cursor: 'pointer', padding: '4px'}}>Position Z</span>
             
              
              </div>
           </div>
        </div>}


       
    </div>
  )
}

export default SideBar
