import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
   <div className="hero min-h-screen uppercase">
  <div className="hero-content flex-col lg:flex-row">
    <h1 className="text-5xl font-black px-8 text-center">sunset Ventures Sign In</h1>
     <div className="mx-auto"> <SignUp /></div>
  </div>
</div>
);
}