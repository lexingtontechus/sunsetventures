import ProductSignUpPage from "./productsignup";
import { useAuth, WithUser, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Product SignUp | Sunset Ventures Inc.",
};

//const ProductSignUp = () => <ProductSignUpPage />;
//export default ProductSignUp;

const SignUp = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    //return null;
    redirect("/");
  }

  return <ProductSignUpPage />;
};

export default SignUp;
