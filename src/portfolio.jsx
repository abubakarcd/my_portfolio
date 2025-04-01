import React from "react";
import Navigation from "./navigation";

function Portfolio(){
    return(
       <div className="bg-[url('./assets/back.webp')] bg-cover bg-no-repeat min-w-[330px]  h-screen font-mono">
        <div className="h-max"><Navigation/></div>
        <div className=" text-center p-8 lg:p-20"><h1 className="  bg-[#100f0faa] font-bold text-4xl md:text-5xl lg:text-7xl xl:text-8xl  text-white pt-4 pb-4  lg:pt-9 lg:pb-8 pr-0 rounded-lg">I'm Muhammad Abubakar.<br></br>A Full Stack Website Developer.</h1></div>
        <div className="bg-amber-950">sfssd</div>
        <div className="bg-amber-600">sdfs</div>
        <div className="bg-cyan-300">sdf</div>
        <div className="bg-black">sdfds</div>
       </div>
               
    )
}

export default Portfolio; 
 