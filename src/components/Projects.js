import React from "react";
import "./styles/Project.scss";

import Plebecite from "./images/1stproject.png";
import Calculator from "./images/calucu.png";
import Todo from "./images/todo.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Transcribe from "./images/transcribe.svg"
import { Button, CardActionArea, CardActions } from "@mui/material";

const Projects = () => {
  return (
    <div className="section-projects">
      <Box>
        <h3>Recent Projects</h3>

        <div className="content-project">
          {/* plebecite */}
          <div className="project">
            {" "}
            <Card sx={{ maxWidth: 345, borderRadius: "10% 10% 13% 8% " }}>
              <CardActionArea>
                <a href="https://leindonlemoh.github.io/" target="_blank">
                  <CardMedia
                    className="card-image"
                    component="img"
                    height="140"
                    image={Plebecite}
                    alt="green iguana"
                  />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Philippine Plebecite
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    An Online poll for Government Proposal User can express
                    their opinion trhough votes.
                    <br />
                    Tools : Html Css
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          {/* calculator */}
          <div className="project">
            {/* calculator */}
            <Card sx={{ maxWidth: 345, borderRadius: "10% 10% 13% 8% " }}>
              <CardActionArea>
                <a
                  href="https://leindonlemoh.github.io/leindonlemohcalculator.github.io/"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    className="card-image"
                    height="140"
                    image={Calculator}
                    alt="green iguana"
                  />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Calculator
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A web based calculator using eval()
                    <br />
                    Tools : Html Css JavaScript
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          {/* todo */}
          <div className="project">
            {/* calculator */}
            <Card sx={{ maxWidth: 345, borderRadius: "10% 10% 13% 8% " }}>
              <CardActionArea>
                <a href="https://task-todo-eight.vercel.app/" target="_blank">
                  <CardMedia
                    component="img"
                    className="card-image"
                    height="140"
                    image={Todo}
                    alt="green iguana"
                  />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Todo List
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A Task creator
                    <br />
                    Tools : React.Js Css Mui Bootstrap
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          {/* TRANSCRIBE */}
                    <div className="project">
            <Card sx={{ maxWidth: 345, borderRadius: "10% 10% 13% 8% " }}>
              <CardActionArea>
                <a href="https://transcribe-ivory.vercel.app/" target="_blank">
                  <CardMedia
                    component="img"
                    className="card-image"
                    height="140"
                    image={Transcribe}
                    alt="green iguana"
                  />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Transcribe "Ongoing"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A Transcribe/Caption app
                    <br />
                    Tools : React.Js Css SunEditor
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Projects;

{
  /* <div className="section-project">
      <div>
        <h3></h3>
        <section className="section-recent">
          <div className="container-projects">
            <a id="file"></a>
            <div className="row">
              <h2>&lt; Recent Projects &gt;</h2>
            </div>
            <div className="projectLinks d-flex">
              <div className="card">
                <a href="https://leindonlemoh.github.io/" target="_blank">
                  <img src={Plebecite} className="card-img-top" alt="..." />
                  <div className="image-text">Click to Visit</div>
                </a>
                <div className="card-body">
                  <h5 className="card-title">Philippine Plebecsite</h5>
                </div>
              </div>
              <div className="card">
                <a
                  href="https://leindonlemoh.github.io/leindonlemohcalculator.github.io/"
                  target="_blank"
                >
                  <img src={Calculator} className="card-img-top" alt="..." />
                  <div className="image-text">Click to Visit</div>
                </a>
                <div className="card-body">
                  <h5 className="card-title">Calculator</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> */
}
