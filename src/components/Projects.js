import React, { useState } from "react";
import "./styles/Project.scss";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { projItems } from "./ProjItems";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const onShowHide = (index) => {
    // Toggle the expanded index
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="section-projects">
      <Box>
        <h3 className="header">Recent Projects</h3>
        <div className="content-project">
          {projItems.map((item, index) => {
            return (
              <div className="project" key={index}>
                <Card sx={{ maxWidth: 345, borderRadius: "25px" }}>
                  <CardActionArea>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardMedia
                        component="img"
                        className="card-image"
                        style={{
                          width: "100%",
                          height: "140px",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        image={item.image}
                        alt={item.title}
                      />
                    </a>
                  </CardActionArea>
                  <CardContent>
                    <div className="title">
                      <p>{item.title}</p>
                    </div>
                    <div className="content">{item.content}</div>
                    <div className="tools">{item.tools}</div>
                    {item.more && expandedIndex !== index ? (
                      <div className="showBtn-container">
                        <button
                          className="showBtn"
                          onClick={() => onShowHide(index)}
                        >
                          Show More
                        </button>
                      </div>
                    ) : null}
                    <div
                      style={{
                        display: expandedIndex === index ? "block" : "none",
                      }}
                    >
                      <div className="details">
                        {item.details ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: item.details }}
                          />
                        ) : null}
                      </div>
                      {item.more && (
                        <div className="hideBtn-container">
                          <button
                            className="hideBtn"
                            onClick={() => onShowHide(index)}
                          >
                            Hide
                          </button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default Projects;
