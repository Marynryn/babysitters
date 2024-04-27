import { auth } from "firebase.js"; // Подставьте путь к вашему файлу firebase.js

export const IsLoggedIn = () => {
  const user = auth.currentUser;
  if (user !== null) return user;
};
