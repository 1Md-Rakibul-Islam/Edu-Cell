import React from "react";
import "./profile.css";

const Profile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    roll: "12345",
    department: "Computer Science",
    semester: "5th",
  };

  return (
    <section> 
      <div class="profile">
        <h2 className="section-title center">IDENTITY</h2>
        <div class="card">
          <div class="card-body">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>ImDezCode</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>imdezcode@gmail.com</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Bali, Indonesia</td>
                </tr>
                <tr>
                  <td>Hobbies</td>
                  <td>:</td>
                  <td>Diving, Reading Book</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:</td>
                  <td>Web Developer</td>
                </tr>
                <tr>
                  <td>Skill</td>
                  <td>:</td>
                  <td>PHP, HTML, CSS, Java</td>
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
