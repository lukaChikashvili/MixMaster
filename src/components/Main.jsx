import React, { useContext, useEffect, useRef, useState } from 'react'
import { Html, OrbitControls, Text, useMatcapTexture, useTexture } from '@react-three/drei';
import gridImg from '../assets/grid.png';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, axesHelper, DoubleSide, MeshMatcapMaterial } from 'three';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MeshContext } from '../context/meshContext';
import { useKeyPress  } from 'react-use';

const Main = () => {
    const [cube, setCube] = useState(true);
    // delete modal
    const [delModal, setDelModal] = useState(false);


  

    // plane grid texture
    const grid = useLoader(TextureLoader, gridImg);

    // global states
    const { torus, sphere, setSphere, setTorus, box , setBox, plane, setPlane,
       meshColor, metalness, roughness, planeColor, positionX, positionY, positionZ, scaleX, 
       scaleY, scaleZ, rotateX, rotateY, rotateZ, duplicatedMesh, setArrowPressed, selectedTexture, 
       url, setUrl,  setSelectedTexture, wireframe, startAnimation, rotationAnimX, rotationAnimY,
        rotationAnimZ, positionAnimX, positionAnimY, positionAnimZ, animSpeed} = useContext(MeshContext);


    // mesh animation
    useFrame(() => {
      
      if( startAnimation && rotationAnimX ) {

        meshRef.current.rotation.x += parseFloat(animSpeed);

      }else if(startAnimation && rotationAnimY) {

        meshRef.current.rotation.y += parseFloat(animSpeed);; 
        meshRef.current.rotation.x = 0;
        

      }else if(startAnimation && rotationAnimZ) {

        meshRef.current.rotation.z +=  parseFloat(animSpeed);;
        meshRef.current.rotation.x = 0;
        meshRef.current.rotation.y = 0; 

      }else if(startAnimation && positionAnimX) {

        meshRef.current.position.z = 0;
        meshRef.current.position.x +=  parseFloat(animSpeed);;
        meshRef.current.position.y = 0; 

      }else if(startAnimation && positionAnimY) {

        meshRef.current.position.z = 0;
        meshRef.current.position.x = 0;
        meshRef.current.position.y +=  parseFloat(animSpeed);; 

      }else if(startAnimation && positionAnimZ) {

        meshRef.current.position.z +=  parseFloat(animSpeed);;
        meshRef.current.position.x = 0;
        meshRef.current.position.y = 0; 

      }
    })


         // right arrow click
    const rightClick = useKeyPress('ArrowRight');
    const leftClick = useKeyPress('ArrowLeft');
    const upClick = useKeyPress('ArrowUp');
    const downClick = useKeyPress('ArrowDown');
    const s = useKeyPress('s');
    const x = useKeyPress('x');
    const y = useKeyPress('y');
    const z = useKeyPress('z');
    const zero = useKeyPress('0');
    const t = useKeyPress('t');
 
  
    let meshRef = useRef();

    // move right
   useEffect(() => {
      if(rightClick) {
        meshRef.current.position.x += 0.5;
        setArrowPressed('Arrow right' );
      }
   }, [rightClick]);

// move left
   useEffect(() => {
      if(leftClick) {
        meshRef.current.position.x -= 0.5;
        setArrowPressed('Arrow left');
      }
   }, [leftClick]);

   // move up
   useEffect(() => {
    if(upClick) {
      meshRef.current.position.y += 0.5;
      setArrowPressed('Arrow up');
    }
 }, [upClick]);

      // move down
      useEffect(() => {
        if(downClick) {
          meshRef.current.position.y -= 0.5;
          setArrowPressed('Arrow down');
        }
     }, [downClick]);
    
    // scale
    useEffect(() => {
      if(s) {
        meshRef.current.scale.x += 0.5;
        meshRef.current.scale.y += 0.5;
        meshRef.current.scale.z += 0.5;
        setArrowPressed('S');
      }
   }, [s]);
  
        // scale x
        useEffect(() => {
          if(x) {
            meshRef.current.scale.x += 0.5;
         
            setArrowPressed('X');
          }
       }, [x]);
      
       // back to normal
       useEffect(() => {
        if(zero) {
          meshRef.current.scale.x = 1;
          meshRef.current.scale.y = 1;
          meshRef.current.scale.z = 1;
          meshRef.current.position.x = 0;
          meshRef.current.position.y = 0;
          meshRef.current.position.z = 0;
       
          setArrowPressed('0');
        }
     }, [zero]);
    
       
       // scale y
       useEffect(() => {
        if(y) {
       
          meshRef.current.scale.y += 0.5;
       
       
          setArrowPressed('Y');
        }
     }, [y]);
    
        // scale z
        useEffect(() => {
          if(z) {
         
            meshRef.current.scale.z += 0.5;
         
            setArrowPressed('Z');
          }
       }, [z]);
      
          // remove texture
          useEffect(() => {
            if(t) {
           
              setSelectedTexture('');
              setUrl('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkyKzctNy0rKy03LS0tKysrLS0tLS03KzctKys3LSs3KzcrLS03NystKysrKys3KysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBv/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwD12hrQihEKBFAEkCBQCIgEkgQKAIgEkgCKECKAJIEkQBRB01HQjQRCiBQgRQBEChFCANAAigCSBAoAigCIBIoQJICkQddDWhGmU0ACMQBEAEUADSBlECBFAEUoEYoABQBFAEUARQJGAHfQdSKyigCKABqAAigAKABoAEUARQgDQBAoAioARQBEgEYgdUdAoRQBFAA0ACKBlFAA0gZRQBFAEQARQgRQBGGAyVCAiJB00RoCpJAIoUAgKAIqAyigAaABQoAigCKAQNRAzE0gCKEChQJIg6BrcCKEYgCKBlQpQREAEYgCKBlFAEUARUARFQAoYgEUKEChUBQFA6hoIoRQBFAyoUARACIxAFCgAhhBlQkGU0gZRSgRQBFCBEgEUDoCkUKGIBEVAZTQAIoAGhAERQBFQAoiARAIRoAEUAUKUBKgAqISNoqIoRQBQoGUYoARQMkgBEUARUBlNRAASABQBNAEojFBEUAiKBtGKIBFAymgARQBEQAigCKAIiAkUADQAIxACkCBhUERQCBpA2ikAkQAKAKFAA0ACKAIoAGgAiKAIoAoUAUKAIoEkVAjEDaIQQKAIoBAUARQBJAEUARQBFAEUASQJJAlEgSKUSUINI6EAigCKAAoAigCIBJIECgBiQBFAEkARSgKMAFIEiQKCQRCBJIEtSAIoAkgQSBIoEMKAIoAkgCKUBSApJApJR//2Q==');
              setArrowPressed('T');
            }
         }, [t]);
        
       
   
 
    

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

    const [ matcap ] = useMatcapTexture(selectedTexture, 256);

    // text loader
  const imgTexture = useTexture(url);


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
                rotation-x = {rotateX}
                rotation-y = {rotateY}
                rotation-z = {rotateZ}
                onClick={deleteCube} 
                ref = {meshRef}
               
                
                >
           <boxGeometry /> 
           {selectedTexture ? (<meshMatcapMaterial matcap={matcap} />) :
            <meshStandardMaterial 
                   color = {meshColor} 
                   metalness={metalness}
                   roughness={roughness} 
                   map = {imgTexture}
                   wireframe = {wireframe && true}
                   
                   />
  }
        </mesh>
          
      
        }

{duplicatedMesh.map((mesh, index) => (
        <mesh key={index} position={[index * 2, 0, 0 ]}>
          {mesh.geometry}
          {mesh.material}
        </mesh>
      ))}

     

   
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
        <mesh position-x={ positionX } 
              position-y = {positionY} 
              position-z = {positionZ}
              scale-x = {scaleX} 
              scale-y = {scaleY}
              scale-z = {scaleZ}
              rotation-x = {rotateX}
              rotation-y = {rotateY}
              rotation-z = {rotateZ}
              onClick={deleteCube} 
              ref = {meshRef}>
            <sphereGeometry />
            {selectedTexture ? (<meshMatcapMaterial matcap={matcap} />) :
            <meshStandardMaterial 
                   color = {meshColor} 
                   metalness={metalness}
                   roughness={roughness} 
                   
                   />
  }
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
