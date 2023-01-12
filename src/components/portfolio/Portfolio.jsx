import React, { useEffect, useState } from 'react'
import "./portfolio.scss"

import { featuredPortfolio,
  } from '../../data';
const Portfolio = () => {

const[selected,setSelected]=useState('featured');
const[data,setData]=useState([]);
  const list=[
     {
      id:'featured',
      title:'Featured',
     },

  ];
  useEffect(()=>{
switch(selected){
  case "featured":
        setData(featuredPortfolio);
        break;

    
      
}
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
        <h1>Few of My projects</h1>

        <div className="container">
         {data.map((d)=>( 

      
          <div className="item">
          
          <a href={d.link}>
            <img src={d.img} alt=""/> 
            <span className='link'>Click To Read More</span>
            </a>
         
           
            <h3>{d.title}</h3>
          </div>
            ))}
        </div>
    </div>
  )
        
}

export default Portfolio;



















