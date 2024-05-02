import { Canvas } from "@react-three/fiber";
import Main from "./components/Main";
import SideBar from "./components/SideBar";


function App() {
 


  return (
    <div className="App">
         <Canvas>
           <Main />
         </Canvas>

         <div>
            <SideBar />
         </div>
    </div>
  );
}

export default App;
