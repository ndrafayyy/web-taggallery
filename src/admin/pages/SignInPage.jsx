import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex flex-col min-h-[70vh] bg-white">
  
      <div 
        className="flex flex-grow justify-center items-center py-6"
        data-aos="fade-up" // <-- Jenis animasi (fade-up)
        data-aos-duration="800" // <-- Kecepatan (opsional, atur sesukamu)
      >
        <SignIn path="/sign-in" signUpUrl="/sign-up" afterSignInUrl="/admin" />
      </div>
      {/* --- AKHIR TAMBAHAN --- */}

    </div>
  );
}