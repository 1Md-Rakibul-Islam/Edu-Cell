import axios from "axios";

const API = axios.create({ baseURL: "https://edu-cell.vercel.app" });
// const API = axios.create({baseURL: 'https://edu-cell.vercel.app'});

export const addUser = (data) => API.post("/users", data);
export const loginUser = (data) => API.post("/users/login", data);
export const authData = (data) => API.post("/users/auth", data);

export const resetPassword = async (userId) => {
  try {
    const response = await fetch(
      "https://edu-cell.vercel.app/users/forget-password",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userId,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
};
