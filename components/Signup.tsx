import Image from "next/image";
import bgImg from "public/images/bgImg.jpg";
import Button from "./Button";
{
  /* always put the images to constants folder and call that here */
}
import { IoLogoApple } from "react-icons/io";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Image for the left half */}
      <div className=" w-full md:min-h-screen">
        <Image
          src={bgImg}
          alt="Signup-Backgorund-Img"
          className="bg-cover md:min-h-screen"
        />
      </div>
      {/* Buttons and Text Content for the Right Part */}
      <div className="w-full flex flex-col bg-orange-200 items-center justify-center gap-8">
        <h1 className="font-bold text-4xl font-sans"> Sign Up </h1>
        <Button title="Login with Apple" icons={<IoLogoApple size={24} />} />
        <Button title="Login with Google" icons={<IoLogoApple size={24} />} />
      </div>
    </div>
  );
};

export default Signup;
