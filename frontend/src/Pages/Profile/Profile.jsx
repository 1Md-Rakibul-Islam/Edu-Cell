import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../../Components/Loading";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  // console.log(user);

  if (!user) {
    return <Loading />;
  }

  return (
    <section>
      <div className="profile">
        <h2 className="section-title center">IDENTITY</h2>
        <div className="card">
          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>:</td>
                  <td>{user.userId}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Roll</td>
                  <td>:</td>
                  <td>{user.roll}</td>
                </tr>
                <tr>
                  <td>Semester</td>
                  <td>:</td>
                  <td>{user.semester}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
