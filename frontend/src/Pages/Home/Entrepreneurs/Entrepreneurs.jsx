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
      <p>
        Welcome to our "About" section! Here, we celebrate the remarkable
        achievements of some of the world's most successful entrepreneurs who
        have left an indelible mark on the business landscape. Let's delve into
        the stories of five exceptional individuals who have reshaped
        industries, inspired innovation, and captured our collective
        imagination.
      </p>
      <div class="our-team-section">
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
