import React, { useEffect, useState } from "react";
import EntrepreneurCard from "../../../Components/EnterpreneureCard";

const Entrepreneurs = () => {
  const [Entrepreneurs, setEntrepreneurs] = useState([]);

  useEffect(() => {
    fetch("entrepreneurs.json")
      .then((res) => res.json())
      .then((data) => {
        setEntrepreneurs(data);
        // console.log(data);
      });
  }, []);

  return (
    <section id="about">
      <h2 className="section-title center">About</h2>
      <p className="section-description">
        Here, we celebrate the remarkable achievements of some of the world's
        most successful entrepreneurs who have left an indelible mark on the
        business landscape.
      </p>
      <div className="our-team-section">
        {Entrepreneurs?.map((entrepreneur) => (
          <EntrepreneurCard
            key={entrepreneur?._id}
            entrepreneur={entrepreneur}
          />
        ))}
      </div>
    </section>
  );
};

export default Entrepreneurs;
