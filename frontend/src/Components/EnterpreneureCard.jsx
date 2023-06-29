import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const EntrepreneurCard = ({entrepreneur}) => {
    const {name, details, image} = entrepreneur;
  return (
    <div className="our-team">
      <div className="pic">
        <img src={image} alt="" />
      </div>
      <div className="team-content">
        <h3 className="title">{name}</h3>
        <span className="post">{details?.length > 200 ? details?.slice(0, 200) + '.....' : details}</span>
      </div>
      <ul className="social">
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
