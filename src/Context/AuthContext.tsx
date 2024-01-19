import React, { createContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  // You can include other properties if needed
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthDataProps {
  children: ReactNode;
}

export const AuthData: React.FC<AuthDataProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) navigate("/signin");
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
