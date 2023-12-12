import React from "react";
import SigninDetails from "./SigninDetails";
import SigninProvider from "./SigninProvider";

const SignIn = () => {
  return (
    <div className="flex h-screen flex-col md:flex md:flex-row md:justify-between">
      <SigninDetails />
      <SigninProvider />
    </div>
  );
};

export default React.memo(SignIn);
