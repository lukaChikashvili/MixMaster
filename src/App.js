import { Canvas } from "@react-three/fiber";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Right from "./components/Right";
import LeftSidebar from "./components/LeftSidebar";
import { useContext } from "react";
import { MeshContext } from "./context/meshContext";





function App() {

     const { background, canvas } = useContext(MeshContext);
  return (
    <>
    <div className="App"  style={{backgroundColor: background}} >
  
         <Canvas ref = {canvas}  gl={{ preserveDrawingBuffer: true }}>
           <Main />
           
         </Canvas>
        
       
         <div>
            <SideBar />
          <LeftSidebar />
         </div>
         
    </div>

    <Right />
    </>
  );
}

export default App;
