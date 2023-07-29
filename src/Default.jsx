import React, { useState } from "react";
import Card from './Card';
import Arr from './Infoarr';


const Defa=()=>{

 return(<>
 <div className="cards">

{/* using map function and the fat arrow function */}

    {Arr.map((val)=>{
        return (<Card 
            key={val.id}
            // key is must property with props
            title={val.title} 
            imgsrc ={val.imgsrc}
            link={val.link}
        >

        </Card>);
    
    })}

    </div>
 </>)
};

export default Defa;