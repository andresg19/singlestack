import React, { useState } from "react";
import { dateFormatter } from "../QA/Question";

const Profile = () => {
  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
      ? JSON.parse(localStorage.getItem("currentUser"))
      : []
  );
  console.log(user);

  const date = dateFormatter(user.createdAt);

  return (
    <div className="containerProfile">
      <section className="profileUser">
        <img
          src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
          alt="not found"
          width={50}
        />
        <h1>{date}</h1>
        <h1>{user.fullname}</h1>
        <h1>{user.email}</h1>
      </section>
    </div>
  );
};

export default Profile;
