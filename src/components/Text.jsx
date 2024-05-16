import { Center, Text3D, useMatcapTexture } from '@react-three/drei'
import React, { useContext } from 'react'
import { MeshContext } from '../context/meshContext'

const Text = () => {

    const { textSample, scaleX, scaleY, scaleZ, positionX, positionY, positionZ, 
        rotateX, rotateY, rotateZ, meshColor, metalness, roughness,  wireframe, selectedTexture,
    bevelThick } = useContext(MeshContext);

        const [ matcap ] = useMatcapTexture(selectedTexture, 256);

  return (
   <>
   <Center>
     <Text3D font="./helvetiker_regular.typeface.json" 
     scale-x = {scaleX}
     scale-y = {scaleY}
     scale-z = {scaleZ}
     position-x = {positionX}
     position-y = {positionY}
     position-z = {positionZ}
     rotation-x = {rotateX}
     rotation-y = {rotateY}
     rotation-z = {rotateZ}
     bevelEnabled
     bevelThickness={bevelThick} >
     {textSample}

     {selectedTexture ? (<meshMatcapMaterial matcap={matcap} />) :
            <meshStandardMaterial 
                   color = {meshColor} 
                   metalness={metalness}
                   roughness={roughness} 
                   wireframe = {wireframe && true}
                   
                   />
  }
     </Text3D>
     </Center>
   </>
  )
}

export default Text
