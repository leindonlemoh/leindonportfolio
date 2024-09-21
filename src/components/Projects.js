import React,{useState} from "react";
import "./styles/Project.scss";
import HRIS from "./images/HRIS.png"
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {projItems} from './ProjItems'
const Projects = () => {
  const [showHide,setShowHide]=useState(false)
const onShowHide =()=>{
  if(showHide === false){
    setShowHide(true)
  }else{
    setShowHide(false)
  }
}
  return (
    <div className="section-projects">
      <Box>
        <h3 className="header">Recent Projects</h3>

        <div className="content-project">
{
  projItems.map((items,index)=>{
          {/* HRIS */}
       return(   
       <div className="project" key={index}>
            <Card sx={{ maxWidth: 345, borderRadius: "25px 25px 25px 25px " }}>
              <CardActionArea>
                <a href={items.link} target="_blank">
              <CardMedia
                 component="img"
                className="card-image"
                style={{
                   width: '100%', 
                   height: '140px', 
                   objectFit: 'cover' }}
                image={items.image}
                alt={items.title}
              />
                </a>
                 </CardActionArea>
                <CardContent>
                  <div className="title">
                    <p>
                    {items.title}
                    </p>
                  </div>
                  <div className="content">
                    {items.content}
                  </div>
                  {items.more === true && showHide === false ? 
                  <div className="showBtn-container">
                  <button className="showBtn" onClick={onShowHide}>Show More</button> 
                  </div>
                  
                  : null}
                 <div style={{display:showHide === false ? "none": "block" }}>

                   <div className="details">
                    {items?.details ?  <div
          dangerouslySetInnerHTML={{ __html: items.details }}
        />:<></>}
                   </div>
                   {items.more === true &&
                   <div className="hideBtn-container">
                   <button className="hideBtn" onClick={onShowHide}>
                    Hide
                    </button>
                   </div>
                   
                   }
                   </div>
                </CardContent>
             
            </Card>
          </div>)
  })
}



        </div>
      </Box>
    </div>
  );
};

export default Projects;

