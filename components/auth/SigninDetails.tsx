import Image from "next/image";
import React from "react";
import bgImg from "/public/images/bgImg.jpg";

const SigninDetails = () => {
  return (
    <div className="bg-purple-400 flex h-full w-full flex-col overflow-hidden">
      <div className=" flex flex-1 flex-col space-y-10 px-[60px] py-10 text-white">
        <Image
          src={""}
          alt="NestBox Logo"
          width={100}
          height={300}
          className="w-[141.5px] object-contain"
        />

        <h1 className="w-[461px] text-5xl">Quickly Add AI Driven Features</h1>

        <div className="flex flex-col space-y-2  ">
          <div className="flex items-center space-x-1.5">
            <Image
              src={""}
              width={200}
              height={200}
              alt="check"
              className="h-5 w-5"
            />
            <p>Collaboration tools for Models & Teams</p>
          </div>
          <div className="flex items-center space-x-1.5">
            <Image
              src={""}
              width={200}
              height={200}
              alt="check"
              className="h-5 w-5"
            />
            <p>Ready to integrate APIs and Webhooks</p>
          </div>
          <div className="flex items-center space-x-1.5">
            <Image
              src={""}
              width={200}
              height={200}
              alt="check"
              className="h-5 w-5"
            />
            <p>Avoid risk with built-in compliance Workflows</p>
          </div>
        </div>
      </div>
      <div className="hidden pl-[60px] md:block">
        <Image
          src={bgImg}
          alt="Intro image"
          width={1200}
          height={1200}
          className=" w-full object-contain"
        />
      </div>
    </div>
  );
};

export default React.memo(SigninDetails);
