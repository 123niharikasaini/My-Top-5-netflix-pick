import React, { useState } from "react";
import Comedy from "./Comedy";
import Defa from "./Default";
import Horror from "./Horror";
import Drama from "./Component/Drama";
import RomanticComedy from "./Component/RomanticComedy";
import Fantasy from "./Component/Fantasy";

const Show=(props)=>{
    if(props.name===''){return(<><Defa/></>)}
    else if(props.name==='Comedy'){return(<Comedy/>)}
    else if(props.name==='Horror'){return(<Horror/>)}
    else if(props.name==='Drama'){return(<Drama/>)}
    else if(props.name==='Romantic Comedy'){return(<RomanticComedy/>)}
    else if(props.name==='Fantasy'){return(<Fantasy/>)}
    
}

export default Show;
