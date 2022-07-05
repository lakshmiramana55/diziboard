import React from "react";
import "./BirthdaysDbHome.css";
const BirthdaysDbHome = (props) => {
  const { birthdaysObj } = props;
  console.log(birthdaysObj);

  return (
    <div className="birthday-container ">
      <div>
        <h1 className="db-sub-title">Birthday</h1>
      </div>
      <hr />
      <div className="bday-bottom-container">
        <div>
          <h1 className="bday-heading">
            {birthdaysObj.Month !== undefined ? birthdaysObj.Month.length : ""}
          </h1>
          <p className="bday-description">Month</p>
        </div>
        <div>
          <h1 className="bday-heading">
            {birthdaysObj.Week !== undefined ? birthdaysObj.Week.length : ""}
          </h1>
          <p className="bday-description">Week</p>
        </div>
        <div>
          <h1 className="bday-heading">
            {birthdaysObj.Today !== undefined ? birthdaysObj.Today.length : ""}
          </h1>
          <p className="bday-description">Today</p>
        </div>
      </div>
    </div>
  );
};

export default BirthdaysDbHome;