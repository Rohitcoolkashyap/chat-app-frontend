import React from "react";

// import onlineIcon from '../../icons/onlineIcon.png';

import "./TextContainer.css";

export default function TextContainer({ users }) {
  return (
    <div className="textContainer">
      <div>
        <h1>Chat Application</h1>
      </div>
      {users ? (
        <div>
          <h1>Online</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  *{name}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
