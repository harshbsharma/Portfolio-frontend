// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import RecentWork from "./components/RecentWork";

function App() {
  return (  
    <div className="relative flex flex-col bg-antiquewhite w-full h-[4342px] 
    overflow-hidden  text-5xl text-darkslategray font-work-sans">
        
        <Navbar/>

        <AboutMe/>

        <RecentWork/>


    </div>
  );
}

export default App;
