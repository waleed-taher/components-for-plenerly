/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bI185avERxA
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import bgImg from "/public/images/bgImg.jpg";

export default function Component() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:min-h-[600px]">
      <div className="hidden lg:block">
        <Image
          alt="Signup illustration"
          className="object-cover h-full w-full"
          height="1080"
          src={bgImg}
          style={{
            aspectRatio: "800/789",
            objectFit: "cover",
          }}
          width="800"
        />
      </div>
      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
          </div>
          <div className="space-y-4">
            <Button className="w-full" variant="outline">
              <IconGoogle className="h-6 w-6 mr-2" />
              Sign up with Google
            </Button>
            <Button className="w-full" variant="outline">
              <IconApple className="h-6 w-6 mr-2" />
              Sign up with Apple
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link className="underline" href="#">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconApple(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function IconGoogle(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
