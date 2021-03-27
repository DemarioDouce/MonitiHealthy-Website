import React from "react";
import MainDisplayComponent from "./res/components/MainDisplayComponent";

const App = () => {
  return (
    <MainDisplayComponent
      path1={"/login"}
      button1Text={"Login"}
      path2={"/signup"}
      button2Text={"Signup"}
    />
  );
};

export default App;
