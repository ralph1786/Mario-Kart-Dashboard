import React from "react";
import moment from "moment";

import "./Notifications.css";

const Notifications = props => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {/* The notifications before the && and the map function checks to see if it exist. */}
            {notifications &&
              notifications.map(notification => {
                return (
                  <li key={notification.id}>
                    <span className="blue-text darken-3 ">
                      {notification.user}
                    </span>
                    <br />
                    <span>{notification.content}</span>
                    <div className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
