import React from "react";

import "./About.css";

const About = () => {
  return (
    <section className="container aboutContainer">
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <h1 className="aboutHeader">About Us</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <p className="aboutParagraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            debitis, cumque placeat voluptas quaerat, esse illo possimus ratione
            numquam eveniet dolorum enim perspiciatis aliquam iste sunt minus.
            Beatae modi nesciunt incidunt eos itaque iure dolor exercitationem
            et, natus impedit, asperiores fugiat ad inventore repudiandae atque
            facere, velit libero magni voluptates?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
