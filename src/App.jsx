import React from "react";
import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import alexa from "./assets/alexa.png";
import siri from "./assets/siri.png";
import cortana from "./assets/cortana.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p>Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title={"Alexa"}
                twitter={"@alexa99"}
                img={alexa}
                description="Alexa was created by Amazon."
              />
            </div>
            <div className="column is-3">
              {" "}
              <ProfileCard
                title={"Siri"}
                twitter={"@siri119"}
                img={siri}
                description="Siri was created by Apple and is being phased out."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title={"Cortana"}
                twitter={"@cortana234"}
                img={cortana}
                description="Cortana was created by Microsoft and No one knows what it does."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
