import React from "react";
import "./styles/Profile.scss";
import ProfImage from "./images/Image.png";

const Profile = () => {
  const onDownloadClick = () => {
    // using Java Script method to get PDF file
    fetch("LEINDON REIMOH  DILAN RESUME-.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "LEINDON REIMOH  DILAN RESUME-.pdf";
        alink.click();
      });
    });
  };
  return (
    <section className="Container section-profile">
      {/* profile */}

      <div className="profile">
        <h3>Leindon Dilan.</h3>
        <p>
          <a
            href="https://github.com/leindonlemoh"
            target="_blank"
            rel="nore ferrer"
          >
            Github <span>|</span>
          </a>
          {/* Github */}
          {/* facebook */}
          <a
            href="https://www.facebook.com/leindonlemoh/"
            rel="facebook"
            target="_blank"
          >
            &nbsp;Facebook
          </a>
          {/* facebook */}
          <br />
        </p>
      </div>
      {/* end of profile */}

      {/* Image, center, dl prof */}
      <div className="imageBtn-container">
        {/* Image and button container */}

        {/* image conatianer */}
        <div className="imageNcover">
          {/* cover */}
          <div className="dark-cover"></div>
          {/* image */}
          <img src={ProfImage} alt="profile background" />
        </div>

        {/* button */}
        <div className="button">
          <button onClick={onDownloadClick} id="neonShadow">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
      {/* end of center */}

      {/* introduction */}
      <div className="introduction">
        <h3>Full-Stack</h3>
        <h3>Web Developer</h3>
        <p>
          With my in-depth training on full stack web development I am confident
          to bring clean and reliable codes, I am able to adapt to any kind of
          situations, working under pressure, always ready to learn new skills,
          and willing to work in a team.
        </p>
      </div>
      {/* end of introduction */}
    </section>
  );
};

export default Profile;
