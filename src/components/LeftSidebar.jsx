import React, {  useContext, useRef } from 'react'
import { MeshContext } from '../context/meshContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const LeftSidebar = () => {

    const { arrowPressed, animation, setStartAnimation, startAnimation, setTimer, timer } = useContext(MeshContext);

    let intervalRef = useRef(null);

    const startAnimationFunc = () => {
       setStartAnimation(true);
       
       if(!startAnimation) {
           intervalRef.current = setInterval(() => {
             setTimer((prev) => prev + 1);
           }, 1000);
       }else {
        clearInterval(intervalRef.current);
       }

          }

          const stopAnimation = () => {
            setStartAnimation(false);
          clearInterval(intervalRef.current)
          }
  return (
    <>
    <div className='absolute bottom-4 right-4 '>
          {
              arrowPressed && <div className='mt-12'>
                 <h1 className="text-white text-xl border-2 p-2 rounded-md">{arrowPressed}</h1>
              </div>
            }
    </div>
{animation && 
 <div className='absolute bottom-4  text-white  opacity-50 w-4/5 ml-28 flex items-center justify-center rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>

 {startAnimation  ? <PauseIcon sx={{fontSize: '40px', cursor: 'pointer'}} onClick = {stopAnimation}  /> : <PlayArrowIcon sx={{fontSize: '40px', cursor: 'pointer'}} onClick = {startAnimationFunc} /> }
 <p className='text-xl absolute right-4' ref = {intervalRef}>{timer}s</p>
 </div> }
 
   
    </>
  )
}

export default LeftSidebar
