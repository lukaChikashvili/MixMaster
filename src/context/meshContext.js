import { createContext, useState } from "react";


export const MeshContext = createContext();


const MeshProvider = ({children}) => {
    
    const [torus, setTorus] = useState(false);
    const [sphere, setSphere] = useState(false);
    const [box, setBox] = useState(false);
    const [plane, setPlane] = useState(false);

    const [meshColor, setMeshColor] = useState(null);
    const [metalness, setMetalness] = useState(0);
    const [roughness, setRoughness] = useState(0);
    const [planeColor, setPlaneColor] = useState('#363636');

    // mesh position
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [positionZ, setPositionZ] = useState(0);

    // mesh scale
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    const [scaleZ, setScaleZ] = useState(1);

    // mesh rotation
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [rotateZ, setRotateZ] = useState(0);

    // mesh duplication
    const [duplicatedMesh, setDuplicatedMesh] = useState([]);

     // displaying keys
 const [arrowPressed, setArrowPressed] = useState('');

 const [selectedTexture, setSelectedTexture] = useState(null);

 // image texture
 const [img, setImg] = useState(false);
 // input url

 const [url, setUrl] = useState('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkyKzctNy0rKy03LS0tKysrLS0tLS03KzctKys3LSs3KzcrLS03NystKysrKys3KysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBv/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwD12hrQihEKBFAEkCBQCIgEkgQKAIgEkgCKECKAJIEkQBRB01HQjQRCiBQgRQBEChFCANAAigCSBAoAigCIBIoQJICkQddDWhGmU0ACMQBEAEUADSBlECBFAEUoEYoABQBFAEUARQJGAHfQdSKyigCKABqAAigAKABoAEUARQgDQBAoAioARQBEgEYgdUdAoRQBFAA0ACKBlFAA0gZRQBFAEQARQgRQBGGAyVCAiJB00RoCpJAIoUAgKAIqAyigAaABQoAigCKAQNRAzE0gCKEChQJIg6BrcCKEYgCKBlQpQREAEYgCKBlFAEUARUARFQAoYgEUKEChUBQFA6hoIoRQBFAyoUARACIxAFCgAhhBlQkGU0gZRSgRQBFCBEgEUDoCkUKGIBEVAZTQAIoAGhAERQBFQAoiARAIRoAEUAUKUBKgAqISNoqIoRQBQoGUYoARQMkgBEUARUBlNRAASABQBNAEojFBEUAiKBtGKIBFAymgARQBEQAigCKAIiAkUADQAIxACkCBhUERQCBpA2ikAkQAKAKFAA0ACKAIoAGgAiKAIoAoUAUKAIoEkVAjEDaIQQKAIoBAUARQBJAEUARQBFAEUASQJJAlEgSKUSUINI6EAigCKAAoAigCIBJIECgBiQBFAEkARSgKMAFIEiQKCQRCBJIEtSAIoAkgQSBIoEMKAIoAkgCKUBSApJApJR//2Q==');


    const addDuplicatedMesh = (mesh) => {
       setDuplicatedMesh((prev) => [...prev, mesh]);

    }


    const updateMeshColor = (color) => {
       setMeshColor(color);
    }

    const updatePlaneColor = (color) => {
      setPlaneColor(color);
    }

    // wireframe mode
    const [wireframe, setWireframe] = useState(false);
    // animation modal
    const [animation, setAnimation] = useState(false);

    // start animation
    const [startAnimation, setStartAnimation] = useState(false);

    //  rotation animations
    const [rotationAnimX, setRotationAnimX] = useState(false);
    const [rotationAnimY, setRotationAnimY] = useState(false);
    const [rotationAnimZ, setRotationAnimZ] = useState(false);

    // position animaitons
    const [positionAnimX, setPositionAnimX] = useState(false);
    const [positionAnimY, setPositionAnimY] = useState(false);
    const [positionAnimZ, setPositionAnimZ] = useState(false);

    // animation speed
    const [animSpeed, setAnimSpeed] = useState(null);

    // 3d text
    const [text, setText] = useState(false);

    return (
        <MeshContext.Provider value={{planeColor, updatePlaneColor, roughness, setRoughness, 
            torus, setTorus, sphere, setSphere, box, setBox, plane, setPlane, meshColor, 
            updateMeshColor, metalness, setMetalness, positionX, setPositionX, positionY, setPositionY,
             positionZ, setPositionZ, scaleX, setScaleX, scaleY, setScaleY, scaleZ, setScaleZ, rotateX,
              rotateY, rotateZ, setRotateX, setRotateY, setRotateZ, duplicatedMesh, addDuplicatedMesh,
            arrowPressed, setArrowPressed, selectedTexture, setSelectedTexture, img, setImg, url, setUrl,
          wireframe, setWireframe, animation, setAnimation, startAnimation, setStartAnimation, rotationAnimX,
           setRotationAnimX, rotationAnimY, setRotationAnimY, rotationAnimZ, setRotationAnimZ, positionAnimX, 
          setPositionAnimX, positionAnimY, setPositionAnimY, positionAnimZ, setPositionAnimZ, animSpeed, setAnimSpeed,
          text, setText }}
        >
       {children}
       </MeshContext.Provider>
    )
}


export default MeshProvider;
