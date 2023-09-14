import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { ProgrammingLanguages } from "../constants";

const Languages = () => {
    return (
      <div>
        <h1 className='text-4xl font-bold text-center mb-10'>Programming languages</h1>
  
      <div className='flex flex-row flex-wrap justify-center gap-9'>
        {ProgrammingLanguages.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h5 style={{textAlign:"center"}}>{technology.name}</h5>
          </div>
        ))}
      </div>
      </div>
    );
};
 
export default SectionWrapper(Languages, "");