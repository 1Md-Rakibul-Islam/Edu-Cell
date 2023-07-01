// import React from "react";
// import "./profile.css";
// import { authData } from "../../API/userRequest";

// const Profile =  () => {

//   // const v = window.localStorage.getItem("token")
//   // const token =JSON.stringify({v}) ;
//   // const data = authData(token).then(data => data.JSON()).then(res => console.log(res))

//   // console.log(data);

//   fetch('http://localhost:5000/users/auth', {
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       token: window.localStorage.getItem("token"),
//     }) // Add the request body here
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Handle the response data
//       console.log('d' ,data.data);
//     })
//     .catch(error => {
//       // Handle any errors
//       console.error(error);
//     });

//   // Sample user data
//   const user = {
//     name: "John Doe",
//     roll: "12345",
//     department: "Computer Science",
//     semester: "5th",
//   };

//   return (
//     <section>
//       <div class="profile">
//         <h2 className="section-title center">IDENTITY</h2>
//         <div class="card">
//           <div class="card-body">
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Name</td>
//                   <td>:</td>
//                   <td>ImDezCode</td>
//                 </tr>
//                 <tr>
//                   <td>Email</td>
//                   <td>:</td>
//                   <td>imdezcode@gmail.com</td>
//                 </tr>
//                 <tr>
//                   <td>Address</td>
//                   <td>:</td>
//                   <td>Bali, Indonesia</td>
//                 </tr>
//                 <tr>
//                   <td>Hobbies</td>
//                   <td>:</td>
//                   <td>Diving, Reading Book</td>
//                 </tr>
//                 <tr>
//                   <td>Job</td>
//                   <td>:</td>
//                   <td>Web Developer</td>
//                 </tr>
//                 <tr>
//                   <td>Skill</td>
//                   <td>:</td>
//                   <td>PHP, HTML, CSS, Java</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

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
