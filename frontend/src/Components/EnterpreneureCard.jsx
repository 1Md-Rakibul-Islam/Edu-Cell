import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const EntrepreneurCard = ({entrepreneur}) => {
    const {name, details, image} = entrepreneur;
  return (
    <div class="our-team">
      <div class="pic">
        <img src={image} alt="" />
      </div>
      <div class="team-content">
        <h3 class="title">{name}</h3>
        <span class="post">{details?.length > 200 ? details?.slice(0, 200) + '.....' : details}</span>
      </div>
      <ul class="social">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
    </div>
  );
};

export default EntrepreneurCard;
