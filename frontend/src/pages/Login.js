import React from "react";
import MainDisplayComponent from "../res/components/MainDisplayComponent";

const Login = () => {
  return (
    <MainDisplayComponent
      path1={"/nurse-login"}
      button1Text={"Nurse Login"}
      path2={"/patient-login"}
      button2Text={"Patient Login"}
    />
  );
};

export default Login;
