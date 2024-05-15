import React, {  useContext } from 'react'
import { MeshContext } from '../context/meshContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const LeftSidebar = () => {

    const { arrowPressed, animation, setStartAnimation } = useContext(MeshContext);
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
 <PlayArrowIcon sx={{fontSize: '40px', cursor: 'pointer'}} onClick = {() => setStartAnimation(true)} />
 </div> }
 
   
    </>
  )
}

export default LeftSidebar
