import React from "react";
import Card from './Card';
import Heading from "./Heading";
import Line from './Line';
import arr from './Infoarr';
import Footer from "./Footer";
import Search from "./Search";

function App(props) {
    return(<>
    <Heading/>
    <Line/>

    <Search/>
    
    {/* <div className="footer"> */}
    <Footer/>
    
    </>);
}

export default App;