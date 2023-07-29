import React, { useState } from "react";
import Card from '../Card';

const Arr=[
    
    {
        id: 2,
        title: "Business Proposal",
        imgsrc: "https://images-cdn.ubuy.co.in/634eb153d2bd39395858235e-business-proposal-soundtrack-2022-korean.jpg", 
        link:"https://www.netflix.com/in/title/81509440",
        genre: "Romantic comedy  Drama",
    },
    {
        id: 3,
        title: "It's Okay to Not Be Okay",
        imgsrc: "https://accidentallyinlovehome.files.wordpress.com/2020/09/ff.jpg",
        link: "https://www.netflix.com/in/title/81243992",
        genre: "Romantic comedy Drama",

    },
    
    {
        id: 12,
        title: "Guardian: The Lonely and Great God",
        imgsrc: "https://1.vikiplatform.com/c/31706c/1aca75b1f6.jpg?x=b&a=0x0",
        link: 'https://www.netflix.com/in/title/81012510',
        genre: "Comedy, Drama, Romance, Fantasy"

    },
    
    
];


const Comedy=()=>{

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

export default Comedy;