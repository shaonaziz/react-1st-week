import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin,FaInstagram } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";
const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="www.facebook.com"><FaFacebook/></a>
      </li>
      <li>
        <a href="www.twitter.com"><FaTwitter/></a>
      </li>
      <li>
        <a href="www.linkedin.com"><FaLinkedin/></a>
      </li>
      <li>
        <a href="www.instagram.com"><FaInstagram/></a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
