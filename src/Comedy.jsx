import React, { useState } from "react";
import Card from './Card';

const Arr=[
    {
        id: 1,
        title: "Vincenzo",
        imgsrc:"https://flxt.tmsimg.com/assets/p19515278_b_h8_aa.jpg",
        link: "https://www.netflix.com/in/title/81365087",
        genre: "Comedy Crime",
    },
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
        genre: "Romantic comedy",

    },
    {
        id: 5,
    title: "Hometown Cha-Cha-Cha",
    imgsrc: "https://staticg.sportskeeda.com/editor/2021/10/935a5-16344605419891-1920.jpg?w=840",
    link: "https://www.netflix.com/in/title/81473182",
    genre: "Romantic comedy, Slice of life"
    },
    {
        id: 7,
        title: "What's wrong with Secretary Kim",
        imgsrc: "https://upload.wikimedia.org/wikipedia/en/1/10/What%27s_Wrong_with_Secretary_Kim.jpg",
        link: "https://www.netflix.com/in/title/81030241",
        genre: "Romantic comedy"
    },
    {
        id: 9,
        title: "The Good Bad Mother",
        imgsrc: "https://i.mydramalist.com/E5x540_4f.jpg",
        link: 'https://www.netflix.com/in/title/81669775',
        genre: "Family, Comedy, Slice-of-life"

    },
    {
        id: 12,
        title: "Guardian: The Lonely and Great God",
        imgsrc: "https://1.vikiplatform.com/c/31706c/1aca75b1f6.jpg?x=b&a=0x0",
        link: 'https://www.netflix.com/in/title/81012510',
        genre: "Comedy, Drama, Romance, Fantasy"

    },
    {
        id: 14,
        title: "Hotel Del Luna",
        imgsrc: "https://i.mydramalist.com/eKKle_2f.jpg",
        link: 'https://www.netflix.com/in/title/81205849',
        genre: "Romantic Comedy, Dark Fantasy"

    },
    {
        id: 15,
        title: "Sh**ting Stars",
        imgsrc: "https://koreanbinge.files.wordpress.com/2022/05/shootingstarstvn.jpg",
        link: 'https://www.netflix.com/in/title/81604431',
        genre: "Romantic Comnedy"

    }
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