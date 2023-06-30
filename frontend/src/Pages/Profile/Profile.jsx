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


import React, { useEffect, useState } from "react";
import "./profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/users/auth', {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          })
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <section>
      <div className="profile">
        <h2 className="section-title center">IDENTITY</h2>
        <div className="card">
          <div className="card-body">
            {userData ? (
              <table>
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>:</td>
                    <td>{userData.userId}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>{userData.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>{userData.email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>:</td>
                    <td>{userData.address}</td>
                  </tr>
                  <tr>
                    <td>Hobbies</td>
                    <td>:</td>
                    <td>{userData.hobbies}</td>
                  </tr>
                  <tr>
                    <td>Job</td>
                    <td>:</td>
                    <td>{userData.job}</td>
                  </tr>
                  <tr>
                    <td>Skill</td>
                    <td>:</td>
                    <td>{userData.skill}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

