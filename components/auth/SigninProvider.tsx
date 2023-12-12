"use client";

import React, { useState } from "react";

import { IoLogoApple } from "react-icons/io";
import Button from "../Button";

const SigninProviders = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="bg-blue-500 text-gray-800 flex h-1/2 flex-col items-center justify-center space-y-8 p-5 md:h-full md:w-full md:p-10">
      <h2 className="font-sans text-center text-4xl font-bold">
        Let&apos;s Sign In to Nestbox AI
      </h2>

      <div className="flex flex-col items-center justify-center space-y-5">
        <Button title="Login with Apple" icons={<IoLogoApple size={24} />} />
        <Button title="Login with Google" icons={<IoLogoApple size={24} />} />

        <div className="flex w-3/4 items-start space-x-2 text-base">
          <input
            type="checkbox"
            onChange={() => setIsChecked((prev) => !prev)}
            checked={isChecked}
            color="white"
            className="checkbox-sm text-purple-primary mt-[5px] h-4 w-4 rounded"
          />
          <p>
            I agree to Nestbox AI&apos;s Registration{" "}
            <span className="text-purple-primary cursor-pointer underline">
              Terms and Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SigninProviders);
