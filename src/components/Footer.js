import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          target="_blank"
          href="https://www.instagram.com/ovidiupetric_/"
          rel="noreferrer noopener"
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/ovidiupetric_"
          rel="noreferrer noopener"
        >
          <TwitterIcon />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/ovidiupetricvasiliu/"
          rel="noreferrer noopener"
        >
           <FacebookIcon />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ovidiu-petric-766b471b4/"
          rel="noreferrer noopener"
        >
           <LinkedInIcon />
        </a>
       
        
      </div>
      <p> &#9993; ovidiupetric99@gmail.com </p>
      <p> &#9990; 0742770496 </p>
    </div>
  );
}

export default Footer;
