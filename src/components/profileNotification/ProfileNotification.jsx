import React, { useState } from "react";
import "./profileNotification.css";
import NotificationMessage from "../notificationMessage/NotificationMessage";
const ProfileNotification = () => {
  const MockNotifications = [
    {
      subject: "Tehnicki pregled putnickih vozila",
      content:
        "Ovo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimo",
      opened: true,
      date: "26/02/2024",
    },

    {
      subject: "Tehnicki pregled putnickih vozila",
      content: "Ovo je drugo obavestenje",
      opened: false,
      date: "26/02/2024",
    },

    {
      subject: "Tehnicki pregled putnickih vozila",
      content:
        " Ovo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimoOvo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimoOvo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimoOvo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimoOvo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimoOvo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimo",
      opened: true,
      date: "26/02/2024",
    },

    {
      subject: "Tehnicki pregled putnickih vozila",
      content: "Ovo je drugo obavestenje",
      opened: true,
      date: "26/02/2024",
    },
    {
      subject: "Tehnicki pregled putnickih vozila",
      content:
        "Ovo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimo",
      opened: true,
      date: "26/02/2024",
    },

    {
      subject: "Tehnicki pregled putnickih vozila",
      content: "Ovo je drugo obavestenje",
      opened: true,
      date: "26/02/2024",
    },
    {
      subject: "Tehnicki pregled putnickih vozila",
      content:
        "Ovo je prvo obavestenje koje ce da bude poslato sa platforme ove na kojoj se nalazimo",
      opened: false,
      date: "26/02/2024",
    },
  ];
  MockNotifications.sort((a, b) =>
    a.opened === b.opened ? 0 : a.opened ? 1 : -1
  );
  return (
    <div className="wd-profile--notifications-wrapper">
      <p className="wd-profile--notifications--title">Messages inbox</p>
      <div className="wd-profile--notifications--container">
        {MockNotifications.length === 0 ? (
          <p>You have no messages</p>
        ) : (
          MockNotifications.map((message) => (
            <NotificationMessage message={message} key={message.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileNotification;
