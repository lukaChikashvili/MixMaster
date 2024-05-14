import React, {  useContext } from 'react'
import { MeshContext } from '../context/meshContext';


const LeftSidebar = () => {

    const { arrowPressed } = useContext(MeshContext);
  return (
    <>
    <div className='absolute bottom-4 right-4 '>
          {
              arrowPressed && <div className='mt-12'>
                 <h1 className="text-white text-xl border-2 p-2 rounded-md">{arrowPressed}</h1>
              </div>
            }
    </div>
   
    </>
  )
}

export default LeftSidebar
