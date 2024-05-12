import { createContext, useState } from "react";


export const MeshContext = createContext();


const MeshProvider = ({children}) => {
    
    const [torus, setTorus] = useState(false);
    const [sphere, setSphere] = useState(false);
    const [box, setBox] = useState(false);
    const [plane, setPlane] = useState(false);

    const [meshColor, setMeshColor] = useState(null);

    const updateMeshColor = (color) => {
       setMeshColor(color);
    }
    return (
        <MeshContext.Provider value={{torus, setTorus, sphere, setSphere, box, setBox, plane, setPlane, meshColor, updateMeshColor}}
        >
       {children}
       </MeshContext.Provider>
    )
}


export default MeshProvider;
