import React from "react";
import Card from './Card';
import Heading from "./Heading";
import Line from './Line';
import arr from './Infoarr';

function App(props) {
    return(<>
    <Heading/>
    <Line/>
    <div className="cards">
    {/* <Card title="Vincenzo" imgSrc="https://flxt.tmsimg.com/assets/p19515278_b_h8_aa.jpg" link="https://www.netflix.com/in/title/81365087"/>
    <Card title="Business Proposal" imgSrc="https://images-cdn.ubuy.co.in/634eb153d2bd39395858235e-business-proposal-soundtrack-2022-korean.jpg" link="https://www.netflix.com/in/title/81509440"/> 
    <Card title="It's Okay to Not Be Okay" imgSrc="https://accidentallyinlovehome.files.wordpress.com/2020/09/ff.jpg" link="https://www.netflix.com/in/title/81243992"/>
    <Card title="The Uncanny Counter" imgSrc="https://asianwiki.com/images/8/8b/The_Uncanny_Counter-P1.jpg" link="https://www.netflix.com/in/title/81323551"/>
    <Card title="Hometown Cha-Cha-Cha" imgSrc="https://staticg.sportskeeda.com/editor/2021/10/935a5-16344605419891-1920.jpg?w=840" link="https://www.netflix.com/in/title/81473182"/> */}


{/* using map function and the fat arrow function */}

    {arr.map((val)=>{
        return (<Card 
            key={val.id}
            // key is must property with props
            title={val.title} 
            imgsrc ={val.imgsrc}
            link={val.link}
        ></Card>)
    
    })}

    </div>
    </>);
}

export default App;