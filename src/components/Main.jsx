import React, { useContext, useState } from 'react'
import { Html, OrbitControls } from '@react-three/drei';
import gridImg from '../assets/grid.png';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, axesHelper, DoubleSide, TorusGeometry } from 'three';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MeshContext } from '../context/meshContext';


const Main = () => {
    const [cube, setCube] = useState(true);
    // delete modal
    const [delModal, setDelModal] = useState(false);



    // plane grid texture
    const grid = useLoader(TextureLoader, gridImg);

    // global states
    const { torus, sphere, setSphere, setTorus, box , setBox, plane, setPlane,
       meshColor, metalness, roughness, planeColor, positionX, positionY, positionZ, scaleX, scaleY, scaleZ} = useContext(MeshContext);


    // delete mesh
    const deleteCube = () => {
     setDelModal(true);
    }

    const deleteMesh = () => {
        setCube(false);
        setDelModal(false);
        setTorus(false);
        setSphere(false);
        setBox(false);
        setPlane(false);

        
    }

  return (
    <>
    <OrbitControls makeDefault />

   


<directionalLight
    castShadow
    position={ [ 4, 4, 1 ] }
    intensity={ 1.5 }
    shadow-mapSize={ [ 1024, 1024 ] }
    shadow-camera-near={ 1 }
    shadow-camera-far={ 10 }
    shadow-camera-top={ 10 }
    shadow-camera-right={ 10 }
    shadow-camera-bottom={ - 10 }
    shadow-camera-left={ - 10 }
/>
<ambientLight intensity={0.5} />

     <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 20 } >
            <planeGeometry  />
            <meshStandardMaterial map = {grid}  color = {planeColor} side={DoubleSide}  />
           <axesHelper />
        </mesh>

{cube &&  <mesh position-x={ positionX } 
                position-y = {positionY} 
                position-z = {positionZ}
                scale-x = {scaleX} 
                scale-y = {scaleY}
                scale-z = {scaleZ}
                onClick={deleteCube}>
           <boxGeometry /> 
            <meshStandardMaterial 
                   color = {meshColor} 
                   metalness={metalness}
                   roughness={roughness} />
        </mesh> }

        {torus && (
        <mesh position={[0, 0, 0]} scale={1.5} onClick={deleteCube}>
           <torusGeometry />
          <meshStandardMaterial 
                  color = {meshColor}
                  metalness={metalness}
                  roughness={roughness} />
        </mesh>
      )}
      {sphere && (
        <mesh position={[0, 0, 0]} scale={1.5} onClick={deleteCube}>
            <sphereGeometry />
          <meshStandardMaterial 
                   color = {meshColor}
                   metalness={metalness}
                   roughness={roughness}/>
        </mesh>
      )}

{box && (
        <mesh position={[0, 0, 0]} scale={1.5} onClick={deleteCube}>
            <boxGeometry />
          <meshStandardMaterial 
                     color = {meshColor}
                     metalness={metalness}
                     roughness={roughness}/>
        </mesh>
      )}

{plane && (
        <mesh position={[0, 0, 0]}  scale={1.5} onClick={deleteCube}>
            <planeGeometry />
          <meshStandardMaterial 
                    color = {meshColor}
                    metalness={metalness}
                    roughness={roughness}/>
        </mesh>
      )}

        {delModal && <Html >
                    <div className='bg-gray-700 text-white p-6 rounded-md shadow-lg flex flex-col gap-4'>
                        <span>OK?</span>
                        <Button className='flex gap-4' variant='contained' onClick={deleteMesh}>Delete? <CloseIcon /></Button>
                    </div>
               </Html>}
       
    </>
  )
}

export default Main
