import { Canvas } from "@react-three/fiber";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Right from "./components/Right";
import LeftSidebar from "./components/LeftSidebar";
import { useContext, useEffect, useState } from "react";
import { MeshContext } from "./context/meshContext";





function App() {

     const { background, canvas } = useContext(MeshContext);

     const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
   
    
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); 
        
      };
  
      
      
      window.addEventListener('resize', handleResize);
  
      
      handleResize();
  
  
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);



  return (
    <>
    {isMobile ? (
      <div className="warning">
        <p>
          This web application is not intended for small devices, responsivness will be arranged in future
        </p>
      </div>
    ) : (
      <div className="App"  style={{backgroundColor: background}} >
  
    
      <>
   <Canvas className="canvas" ref = {canvas}  gl={{ preserveDrawingBuffer: true }}>
   <Main />
   
 </Canvas>


 <div>
    <SideBar />
  <LeftSidebar />
 </div>
 </>
  
      
         
    </div>
    )}
  

   {!isMobile &&  <Right />}
    </>
  );
}

export default App;
