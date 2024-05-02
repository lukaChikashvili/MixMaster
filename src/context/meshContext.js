import { createContext, useState } from "react";


export const MeshContext = createContext();


const MeshProvider = ({children}) => {
    
    const [torus, setTorus] = useState(false);
    const [sphere, setSphere] = useState(false);
    const [box, setBox] = useState(false);
    return (
        <MeshContext.Provider value={{torus, setTorus, sphere, setSphere, box, setBox}}
        >
       {children}
       </MeshContext.Provider>
    )
}


export default MeshProvider;
