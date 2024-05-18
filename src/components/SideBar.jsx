
import React, { useContext,  useEffect,  useRef, useState } from 'react'
import cube from '../assets/cube.png';
import square from '../assets/square.png';
import sphere from '../assets/sphere.png';
import torusImg from '../assets/torus.png';
import { MeshContext } from '../context/meshContext';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Tooltip } from '@mui/material';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import { useScreenshot } from 'use-react-screenshot';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ArrowBack, ArrowDownward, ArrowForward,  ArrowUpward } from '@mui/icons-material';
import { motion } from 'framer-motion';




const SideBar = () => {

    // mesh modal
    const [meshModal, setMeshModal] = useState(false);
    const [textureModal, setTextureModal] = useState(false);
    
// more textures
const [moreTextures, setMoreTextures] = useState(false);

const [active, setActive] = useState(null);
  
// render modal
const [render, setRender] = useState(false);

 // use context
 const { setTorus, setSphere, setBox, setPlane, setSelectedTexture, img, url,
   setWireframe, wireframe, animation, setAnimation, setRotationAnimX ,
  setRotationAnimY, setRotationAnimZ, setPositionAnimX, setPositionAnimY, 
  setPositionAnimZ, setAnimSpeed,  setText, text, setTextSample,  setBevelThick, setRemoveGrid, 
  removeGrid, canvas, setGeo, geo} = useContext(MeshContext);

// image modal
const [imgModal, setImgModal] = useState(false);


// take screenshot
const [image, takeScreenshot] = useScreenshot({
  type: 'image/png',
  quality: 1.0
 });

const takeImage = () => {
  takeScreenshot(canvas.current).then((img) => {
    setImgModal(true);
   
   
  });
};

// download image
const downloadImg = () => {
  const downloadLink = document.createElement('a');
  downloadLink.href = image;
  downloadLink.download = image;
  downloadLink.click();
}

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

      setRotationAnimX(false);
      setRotationAnimY(false);
      setRotationAnimZ(false);
    }

    if(index === 5) {
      setPositionAnimX(false);
      setPositionAnimY(true);
      setPositionAnimZ(false);

      setRotationAnimX(false);
      setRotationAnimY(false);
      setRotationAnimZ(false);
    }

    if(index === 6) {
      setPositionAnimX(false);
      setPositionAnimY(false);
      setPositionAnimZ(true);

      setRotationAnimX(false);
      setRotationAnimY(false);
      setRotationAnimZ(false);
    }
   
 }

 let textModal = useRef(null);

 const [showIcon, setShowIcon] = useState(false);

 // close modals
 const closeModals = () => {
   setAnimation(false);
   textModal.current.style.display = "none";
   setShowIcon(true);
   
 }

 const hideIcon = () => {
  textModal.current.style.display = "block";
  setShowIcon(false);
 }

 // shortcuts
 const [shortcut, setShortcut] = useState(false);
 const [banner, setBanner] = useState(true);

 // close on outside click
 let bannerRef = useRef(null);

 useEffect(() => {
    
    const detectClick = (e) => {
      if(bannerRef.current && !bannerRef.current.contains(e.target)) {
         setBanner(false);
      }
    }
  

   document.body.addEventListener('click', detectClick);

   return () => {
    document.body.removeEventListener('click', detectClick);
   }
 }, [])

  return (
<div className='absolute top-0 left-0 bg-[#435055] opacity-100   text-white w-full p-2 flex '>
  {geo ?  <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setMeshModal(!meshModal)}>დამატება</p> :
       <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setMeshModal(!meshModal)}>Add</p>
  }
      <div className='flex ' >
         {meshModal && <motion.div initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1, delay: 0.4}} 
         className='flex absolute top-12 left-4 bg-white rounded-md gap-8 p-4'>
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

             
            </motion.div>}

            {geo ?  <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setTextureModal(!textureModal)} >კომპოზიცია</p> :
            <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setTextureModal(!textureModal)} >Textures</p>
}
           {
            textureModal && <motion.div initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition={{duration: 1, delay: 0.4}}
            className='absolute top-16 left-4 flex gap-8 bg-black p-2 rounded-md'>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/15100F_241D1B_292424_2C2C27.jpg" onClick={() => applyMatcap('15100F_241D1B_292424_2C2C27')}  className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/167E76_36D6D2_23B2AC_27C1BE.jpg" onClick={() => applyMatcap('167E76_36D6D2_23B2AC_27C1BE')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/17395A_7EBCC7_4D8B9F_65A1B5.jpg" onClick={() => applyMatcap('17395A_7EBCC7_4D8B9F_65A1B5')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/191514_6D5145_4E3324_3B564D.jpg" onClick={() => applyMatcap('191514_6D5145_4E3324_3B564D')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1A2461_3D70DB_2C3C8F_2C6CAC.jpg" onClick={() => applyMatcap('1A2461_3D70DB_2C3C8F_2C6CAC')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1B1B1B_515151_7E7E7E_6C6C6C.jpg" onClick={() => applyMatcap('1B1B1B_515151_7E7E7E_6C6C6C')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1B1B1B_999999_575757_747474.jpg" onClick={() => applyMatcap('1B1B1B_999999_575757_747474')} className='rounded-full w-24 cursor-pointer'/>
              <img src = "https://github.com/nidorx/matcaps/raw/master/thumbnail/1C70C6_09294C_0F3F73_52B3F6.jpg" onClick={() => applyMatcap('1C70C6_09294C_0F3F73_52B3F6')} className='rounded-full w-24 cursor-pointer'/>
              <h2 className='mt-8 cursor-pointer font-bold underline underline-offset-4 duration-500 ease-in hover:decoration-wavy' onClick={showMoreTextures}>{geo ? 'მეტი' : 'More textures'}</h2>
              </motion.div>
           }


      </div>
    {moreTextures && <motion.div initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1, delay: 0.4}}
     className='absolute  bg-black p-12   flex flex-wrap gap-24 rounded-md  overflow-auto max-h-56 w-4/5 ml-28 textureModal ' style={{marginTop: '480px'}} >
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
    </motion.div>}
      

     {img && <div className='absolute right-4 top-12'>
         <p className='text-center underline underline-offset-8 duration-500 ease-in hover:decoration-wavy'>{geo ? 'გადახედვა' : 'Image preview'}</p>
         <img src = {url} className='w-36 h-24 object-cover mt-4 rounded-md shadow-lg'/>
      </div>}

      <Tooltip title= {geo ? "კარკასი" : "Wireframe mode"} >
      <LanguageIcon className='absolute right-4 cursor-pointer opacity-50 duration-500 ease hover:opacity-100' onClick = {() => setWireframe(!wireframe)}/>
      </Tooltip>

      <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setAnimation(true)}>{geo ? 'ანიმაცია' : 'Animation'}</p>

      {animation && <motion.div nitial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1, delay: 0.4}}
      className='absolute mt-12 right-4'>
        
           <p className='text-center'>{geo ? 'ანიმაცია' : 'Animation'}</p>
           <div className='bg-black opacity-70 p-4 rounded-md flex flex-col gap-2'>
           <span className='absolute right-4 top-8 cursor-pointer' onClick={closeModals}>X</span>
            <div className='flex gap-4'>
              <span> {geo ? 'სიჩქარე:' : 'speed:'}</span>
              <input type='number' step={0.01}  onChange={(e) => setAnimSpeed(e.target.value)}  className='w-24 outline-none text-black' />
              </div>

              <div className='flex gap-4'>
              <span onClick={() => handleActive(1)} className={active === 1 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>{geo ? 'ბრუნვა X ღერძზე' : 'Rotate on X'}</span>
              <span onClick={() => handleActive(2)} className={active === 2 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>{geo ? 'ბრუნვა Y ღერძზე' : 'Rotate on Y'}</span>
              <span onClick={() => handleActive(3)} className={active === 3 ? 'active' : '' } style={{cursor: 'pointer', padding: '4px'}}>{geo ? 'ბრუნვა Z ღერძზე' : 'Rotate on Z'}</span>
             
            
              </div>

              <div className='flex gap-4'>
              <span onClick={() => handleActive(4)} className={active === 4 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>{geo ? 'მოძრაობა X ღერძზე' : 'Position X'}</span>
              <span onClick={() => handleActive(5)} className={active === 5 ? 'active' : ''} style={{cursor: 'pointer', padding: '4px'}}>{geo ? 'მოძრაობა Y ღერძზე' : 'Position Y'}</span>
              <span onClick={() => handleActive(6)} className={active === 6 ? 'active' : '' } style={{cursor: 'pointer', padding: '4px'}}>{geo ? 'მოძრაობა Z ღერძზე' : 'Position Z'}</span>
             
              
              </div>
           </div>
        </motion.div>}

        <p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500'
         onClick={() => setText(true)} >{geo ? '3დ ტექსტი' : '3D Text'}</p>


  {text && <motion.div nitial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1, delay: 0.8}}
  className='absolute mt-12 right-4 ' ref = {textModal}>
       <p className='text-center'>{geo ? 'შეცვალე ტექსტი' : 'Modify the text'}</p>

       <div className='bg-black opacity-70 p-4 rounded-md flex flex-col gap-2'>
       <span className='absolute right-4 top-8 cursor-pointer ' onClick={closeModals}>X</span>
          <input type='text' placeholder={geo ? 'შეიყვანე ტექსტი..' :'Enter text..'} className='outline-none rounded-md px-2 text-black mt-8' onChange={(e) => setTextSample(e.target.value)}/>
         <div className='flex gap-4'>
          <span>{geo ? 'კუთხის სისქე:' : 'Bevel thickness:'} </span>
          <input type='number' step = "0.01" onChange={(e) => setBevelThick(e.target.value)} className='w-24 outline-none rounded-md px-2 text-black' />
          </div>
       </div>
    </motion.div>}

    {showIcon && <FormatColorTextIcon className='absolute right-4 top-20 cursor-pointer' onClick = {hideIcon} />}
       
  <Tooltip title = {geo ? "ღერძი" : "Grid"}>
<Grid3x3Icon className='absolute right-16 cursor-pointer opacity-50 duration-500 ease hover:opacity-100' onClick = {() => setRemoveGrid(!removeGrid)} />
</Tooltip>

<p className='cursor-pointer duration-500 w-24 text-center rounded-md ease hover:bg-gray-500' onClick={() => setRender(!render)}>{geo ? "რენდერი" : "Render"}</p>

{render && <div className='absolute mt-12 right-4 flex gap-4 items-center'>
    <p>{geo ? 'რენდერი:' : 'Render image:'} </p>
    <Button variant = "contained" size='small' onClick={takeImage}>{geo ? 'რენდერი' : 'Render'}</Button>
  </div>}


{imgModal && <motion.div initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1, delay: 0.4}}
 className='absolute  bg-black p-2   flex flex-wrap gap-24 rounded-md  mt-24 w-4/5 ml-28 select-none '>
  <span className='absolute z-10 text-black text-xl font-bold left-4 cursor-pointer' onClick={() => setImgModal(false)}>X</span>
    <img src = {image} />
    <Tooltip title = {geo ? "სურათის ჩამოტვირთვა" : 'Download image'}>
    <CloudDownloadIcon className='absolute text-white z-10 bottom-4 text-2xl right-8 cursor-pointer duration-500 ease-in hover:text-green-500' onClick = {downloadImg} />
    </Tooltip>
    </motion.div>}

<Tooltip title = {geo ? 'ღილაკები' : "Shortcuts"}>
<HelpOutlineIcon className='absolute right-28 cursor-pointer opacity-50 duration-500 ease hover:opacity-100' onClick = {() => setShortcut(!shortcut)} />
</Tooltip>

{shortcut && <motion.div initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1, delay: 0.4}}
className='absolute  bg-black p-12 flex flex-col gap-24 rounded-md  mt-48 w-4/5 ml-28 select-none'>
  <span className='absolute right-4 top-4 cursor-pointer text-2xl' onClick={() => setShortcut(false)}>X</span>
  <h1 className='underline underline-offset-8 cursor-pointer duration-500 ease-in hover:decoration-wavy'>{geo ? 'შორთქათები' : 'Keyboard shortcuts'}</h1>
  <div className='flex gap-8'>
    <div className='flex flex-col gap-4'>
     <div className='flex items-center gap-4'>
       <h2 className='text-3xl border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold '>X</h2>
       <p className='text-xl'>{geo ? 'ფიგურის გადიდება X ღერძზე' : 'Scale mesh on X axis'}</p>
      </div>

      <div className='flex items-center gap-4'>
       <h2 className='text-3xl border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold '>Y</h2>
       <p className='text-xl'>{geo ? 'ფიგურის გადიდება Y ღერძზე' : 'Scale mesh on Y axis'}</p>
      </div>

      <div className='flex items-center gap-4'>
       <h2 className='text-3xl border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold '>Z</h2>
       <p className='text-xl'>{geo ? 'ფიგურის გადიდება Z ღერძზე' : 'Scale mesh on Z axis'}</p>
      </div>

    </div>

    <div className='flex flex-col gap-4'>
     <div className='flex items-center gap-4'>
       <h2 className='text-3xl border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold '>T</h2>
       <p className='text-xl'>{geo ? 'უკან დაბრუნება' : 'Back to normal'}</p>
      </div>

      <div className='flex items-center gap-4'>
       <h2 className='text-3xl border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold '>0</h2>
       <p className='text-xl'>{geo ? 'საწყისი პოზიცია' : 'Initial position'}</p>
      </div>

      <div className='flex items-center gap-4'>
       <h2 className='text-3xl border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold '>S</h2>
      <p className='text-xl'>{geo ? 'ყველა ღერძზე გადიდება' : 'Scale on all axis'}</p>
      </div>

    </div>
    </div>

    <div className='absolute top-56 right-36'>
      <ArrowBack sx={{fontSize: '50px'}} className=' border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold'  />
      <ArrowDownward sx={{fontSize: '50px'}} className=' ml-4 border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold' />
      <ArrowForward  sx={{fontSize: '50px'}} className=' ml-4 border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold' />
      <ArrowUpward   sx={{fontSize: '50px'}} className=' absolute bottom-16 left-12 ml-5 border-2 w-12 h-12 text-center rounded-md flex items-center cursor-pointer  justify-center shadow-lg duration-500 ease-in-out hover:bg-white hover:text-black hover:font-bold' />
   
    </div>
    <p className='absolute bottom-12 right-32'>{geo ? '' : 'Move mesh on X, Y, and Z axis'}</p>
 
  </motion.div>}

{banner && 
    <motion.div initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1, delay: 0.6}}
    className='absolute  bg-black pb-12  gap-24 rounded-md  mt-36  ml-72 select-none' ref={bannerRef}>
     <img src = "./logo.png" className='  ' style={{width: '600px', height: '300px', objectFit: 'fill'}}/>
     <h1 className='text-white text-2xl text-center pt-8'>{geo ? 'მოგესალმებათ მიქსმასტერი' : 'Welcome to MixMaster'}</h1>
    <div className='flex gap-4 pt-8 justify-center'>
      <span className='text-xl'>{geo ? 'ენა:' : 'Language:'} </span>
      
        <Button variant='contained' size='small'  onClick={() => setGeo(false)}>{geo ? 'ინგლისური' : 'English'}</Button>
        <Button variant="outlined"  size='small' onClick={() => setGeo(true)}>{geo ? 'ქართული' : 'Georgian'}</Button>
        </div>
     </motion.div>
}
    </div>
  )
}

export default SideBar
