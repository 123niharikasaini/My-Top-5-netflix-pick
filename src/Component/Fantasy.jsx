import React, { useState } from "react";
import Card from '../Card';

const Arr=[
    
    {
        id: 4,
        title: "The Uncanny Counter",
        imgsrc: "https://asianwiki.com/images/8/8b/The_Uncanny_Counter-P1.jpg",
        link:"https://www.netflix.com/in/title/81323551",
        genre:"Action, Mystery, Fantasy"
    },
    {
        id: 6,
        title: "Tomorrow",
        imgsrc: "https://asianwiki.com/images/f/fa/Tomorrow_Korean_Drama-p1.jpg",
        link: "https://www.netflix.com/in/title/81503460",
        genre: "Action, Thriller, Drama, Fantasy",
        },
        {
            id: 10,
            title: "Tale of the Nine Tailed",
            imgsrc: "https://topmovierankings.com/wp-content/uploads/2023/04/3Tale-of-the-Nine-Tailed-1938.webp",
            link: 'https://www.netflix.com/in/title/81357286',
            genre: "Drama, Romance, Horror, Fantasy, Action fiction, Suspense"
        },

        {
            id: 11,
            title: "Ghost Doctor",
            imgsrc: "https://imageio.forbes.com/specials-images/imageserve/61e1994e4b8c244cb4fff303/0x0.jpg?format=jpg&width=1200",
            link: 'https://www.netflix.com/in/title/81587524',
            genre: "Medical Drama, Fantasy"
    
        },
    
        {
            id: 12,
            title: "Guardian: The Lonely and Great God",
            imgsrc: "https://1.vikiplatform.com/c/31706c/1aca75b1f6.jpg?x=b&a=0x0",
            link: 'https://www.netflix.com/in/title/81012510',
            genre: "Comedy, Drama, Romance, Fantasy"
    
        },
        {
            id: 13,
            title: "Alchemy of Souls",
            imgsrc: "https://sm.mashable.com/mashable_me/photo/default/alchemy-of-souls-light-and-shadow-poster_n719.jpg",
            link: 'https://www.netflix.com/in/title/81517188',
            genre: "Romance, Fantasy, Action"
    
        },
        {
            id: 14,
            title: "Hotel Del Luna",
            imgsrc: "https://i.mydramalist.com/eKKle_2f.jpg",
            link: 'https://www.netflix.com/in/title/81205849',
            genre: "Romantic Comedy, Dark Fantasy"
    
        },
    
    
    
];


const Fantasy=()=>{

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

export default Fantasy;