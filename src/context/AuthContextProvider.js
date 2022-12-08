import { createContext, useState } from "react";
import img from "../assets/imgs/profile/3.png";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState();

  // {
  //   name: "Siddharth Goyal", img;
  // }
  const authValues = { user, setUser, modal, setModal };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
