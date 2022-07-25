import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProfilePic from "../assets/ProfilePic.png";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <img src={ProfilePic} alt="" />
        <h2> Hi, My Name is Ovidiu </h2>
        <div className="prompt">
          <p>
            {" "}
            A computer science graduate with a big drive for learning and
            working{" "}
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ovidiu-petric-766b471b4/"
            rel="noreferrer noopener"
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/ovidiupetric99"
            rel="noreferrer noopener"
          >
            <GitHubIcon />
          </a>
          <div className="contact">
            <EmailIcon /> <span>ovidiupetric99@gmail.com</span>
          </div>
          <div className="contact">
            <PhoneIcon /> <span>0742770496</span>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>
              {" "}
              ReactJS, HTML, CSS, SCSS, NPM, Firebase Authentication/Firestore,
              MaterialUI{" "}
            </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span> NodeJS, ExpressJS </span>
          </li>
          <li className="item">
            <h2> Languages / Technologies </h2>
            <span> JavaScript, C, C++, C#, Java, Python, MySQL </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
