import React from "react";
import "./Profile.scss"; // Import the SCSS file for styling

const Profile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    roll: "12345",
    department: "Computer Science",
    semester: "5th",
  };

  return (
    <div className="profile">
      <div className="profile-body">
        <div className="profile-info">
          <div>
            <span className="label">Name:</span>
            <span className="value">{user.name}</span>
          </div>
          <div>
            <span className="label">Roll:</span>
            <span className="value">{user.roll}</span>
          </div>
          <div>
            <span className="label">Department:</span>
            <span className="value">{user.department}</span>
          </div>
          <div>
            <span className="label">Semester:</span>
            <span className="value">{user.semester}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
