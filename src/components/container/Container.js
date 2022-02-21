import React, { useState, createContext } from "react";

//Components
import { Navigation } from "../navigation/Navigation";

//Constants
import { language } from "../../constants/base";

export const UserContext = createContext();

export const Container = (props) => {
  const [lang, setLang] = useState("ES");
  const handLang = (e) => {
    setLang(e.target.value);
  };

  return (
    <UserContext.Provider value={lang}>
      <Navigation handLang={handLang} language={language} />
      {props.children}
    </UserContext.Provider>
  );
};
