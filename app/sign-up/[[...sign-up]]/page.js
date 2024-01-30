import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="hero min-h-screen uppercase">
      <div className="hero-content">
        <div className="max-w-xl justify-between mx-auto">
          <h1 className="text-5xl font-black p-8 text-center">
            Sunset Ventures Register
          </h1>
          <div className="px-8">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
