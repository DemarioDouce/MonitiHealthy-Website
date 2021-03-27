import React from "react";
import MainDisplayComponent from "../res/components/MainDisplayComponent";

const SignUp = () => {
  return (
    <MainDisplayComponent
      path1={"/nurse-signup"}
      button1Text={"Nurse Signup"}
      path2={"/patient-signup"}
      button2Text={"Patient Signup"}
    />
  );
};

export default SignUp;
