import React, { useState } from "react";
import Card from './Card';

const Arr=[
    {
        id: 10,
        title: "Tale of the Nine Tailed",
        imgsrc: "https://topmovierankings.com/wp-content/uploads/2023/04/3Tale-of-the-Nine-Tailed-1938.webp",
        link: 'https://www.netflix.com/in/title/81357286',
        genre: "Drama, Romance, Horror, Fantasy, Action fiction, Suspense"
    },

    {
        id: 16,
        title: "Kingdom",
        imgsrc: "https://asianwiki.com/images/b/b6/Kingdom_%28Korean_Drama%29-TP.jpg",
        link: 'https://www.netflix.com/in/title/80180171',
        genre: "Political Drama, Horror, Action Thriller, Historical Drama"
    },
    
];


const Horror=()=>{

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

export default Horror;