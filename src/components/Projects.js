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
        <h3>Recent Projects</h3>

        <div className="content-project">
{
  projItems.map((items,index)=>{
          {/* HRIS */}
       return(   
       <div className="project" key={index}>
            <Card sx={{ maxWidth: 345, borderRadius: "10% 10% 13% 8% " }}>
              <CardActionArea>
                <a href={items.link} target="_blank">
              <CardMedia
                 component="img"
                className="card-image"
                style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                image={items.image}
                alt={items.title}
              />
                </a>
                 </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {items.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {items.content}
                  </Typography>
                  {items.more === true && showHide === false ? <button className="showBtn" onClick={onShowHide}>Show More</button> : null}
                 <div onClick={onShowHide} style={{display:showHide === false ? "none": "block" }}>

                   <Typography variant="body2" color="text.secondary">
                    {items?.details ?  <div
          dangerouslySetInnerHTML={{ __html: items.details }}
        />:<></>}
                   </Typography>
                   {items.more === true &&<button className="hideBtn" onClick={onShowHide}>Hide</button>}
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

