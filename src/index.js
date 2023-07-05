import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

const list={
  listStyle: 'decimal',
  fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  fontSize: '10px',
  margin: '10px',
  padding: '10px',
}

const imgStyle={
  height: "100px",
  width: "100px",
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <h1 className='head'>
    Top 5 Netflix Series Pick
  </h1><hr className='line'/>
  <h3 className='subHead'>My Favorite:-</h3>
  <ol style={list} className='olList'>
    <li className='imgSection'><a href="https://flxt.tmsimg.com/assets/p19515278_b_h8_aa.jpg">Vincenzo </a><img src="https://flxt.tmsimg.com/assets/p19515278_b_h8_aa.jpg" alt="img" style={imgStyle} className='img'/></li>
    <li className='imgSection'><a href="https://images-cdn.ubuy.co.in/634eb153d2bd39395858235e-business-proposal-soundtrack-2022-korean.jpg">Business Proposal</a><img src="https://images-cdn.ubuy.co.in/634eb153d2bd39395858235e-business-proposal-soundtrack-2022-korean.jpg" alt="img" style={imgStyle} className='img'/></li>
    <li className='imgSection'><a href="https://accidentallyinlovehome.files.wordpress.com/2020/09/ff.jpg">It's Okay to Not Be Okay</a><img src="https://accidentallyinlovehome.files.wordpress.com/2020/09/ff.jpg" alt="img" style={imgStyle} className='img'/></li>
    <li className='imgSection'><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbwx1OLjdTzkXeuibPuft2qpDOnI5zITp8olJwqX9T8E8b2x--gEODF4THn_C9vWY0pQ&usqp=CAU">What's Wrong with Secretary Kim</a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbwx1OLjdTzkXeuibPuft2qpDOnI5zITp8olJwqX9T8E8b2x--gEODF4THn_C9vWY0pQ&usqp=CAU" alt="img" style={imgStyle} className='img'/></li>
    <li className='imgSection'><a href="https://staticg.sportskeeda.com/editor/2021/10/935a5-16344605419891-1920.jpg?w=840">Hometown Cha-Cha-Cha</a><img src="https://staticg.sportskeeda.com/editor/2021/10/935a5-16344605419891-1920.jpg?w=840" alt="img" style={imgStyle} className='img'/></li>

  </ol>
  </>
)
