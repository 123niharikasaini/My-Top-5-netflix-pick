import React from "react";
import Card from './Card';
import Heading from "./Heading";
import Line from './Line';
import arr from './Infoarr';
import Footer from "./Footer";

function App(props) {
    return(<>
    <Heading/>
    <Line/>
    <div className="cards">

{/* using map function and the fat arrow function */}

    {arr.map((val)=>{
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
    <div className="footer">
    <Footer/>
    </div>
    </>);
}

export default App;