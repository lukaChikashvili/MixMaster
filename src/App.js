import { Canvas } from "@react-three/fiber";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Right from "./components/Right";
import LeftSidebar from "./components/LeftSidebar";





function App() {


  return (
    <>
    <div className="App">
  
         <Canvas>
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
