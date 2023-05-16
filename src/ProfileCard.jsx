import React from "react";
// import alexa from "./assets/alexa.png";

const ProfileCard = ({ title, twitter, img, description }) => {
  //   console.log(img);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={img} alt={title} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">Title is {title}</p>
          <p className="subtitle is-8">Handle is {twitter}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
