import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { frontendTech } from "../constants";

const Frontend = () => {
    return (
      <div>
        <h1 className='text-4xl font-bold text-center mb-10'>Frontend</h1>
  
      <div className='flex flex-row flex-wrap justify-center gap-9'>
        {frontendTech.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <img style={{width:"120px", height:"120px"}} src={technology.icon} />
            <h5 style={{textAlign:"center"}}>{technology.name}</h5>
          </div>
        ))}
      </div>
      </div>
    );
};
 
export default SectionWrapper(Frontend, "");