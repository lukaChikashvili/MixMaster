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

    const updateMeshColor = (color) => {
       setMeshColor(color);
    }

    const updatePlaneColor = (color) => {
      setPlaneColor(color);
    }

    return (
        <MeshContext.Provider value={{planeColor, updatePlaneColor, roughness, setRoughness, 
            torus, setTorus, sphere, setSphere, box, setBox, plane, setPlane, meshColor, 
            updateMeshColor, metalness, setMetalness, positionX, setPositionX, positionY, setPositionY,
             positionZ, setPositionZ, scaleX, setScaleX, scaleY, setScaleY, scaleZ, setScaleZ}}
        >
       {children}
       </MeshContext.Provider>
    )
}


export default MeshProvider;
