import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-[70vh] bg-white">
      <div 
        className="flex flex-grow justify-center items-center py-6"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <SignUp path="/sign-up" signInUrl="/sign-in" />
      </div>
    </div>
  );
}