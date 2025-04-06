
import React, { useState, useEffect } from "react";
import "./Notification.css";

const Notification = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return visible ? (
    <div className="notification">
      <div className="notification-content">{message}</div>
    </div>
  ) : null;
};

export default Notification;
