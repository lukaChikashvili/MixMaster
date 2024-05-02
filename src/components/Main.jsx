import React from 'react'
import { OrbitControls } from '@react-three/drei';
import gridImg from './assets/grid.png';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, AxesHelper, DoubleSide } from 'three';


const Main = () => {

    // plane grid texture
    const grid = useLoader(TextureLoader, gridImg);


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
            <meshStandardMaterial map = {grid}  color = '#636363' side={DoubleSide} />
            <axesHelper />
        </mesh>

        <mesh position={ [0, -1, 0] } scale = {1.5}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    </>
  )
}

export default Main
