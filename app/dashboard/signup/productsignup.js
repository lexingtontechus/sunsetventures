"use client";
import ProductSignUpForm from "./productsignupform";

const ProductSignUp = () => (
  <>
    <div className="hero min-h-screen svg-contact">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Product SignUp</h1>
          <p className="my-4 text-2xl font-smeibold">
            Select a product that suits your profile.
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto">
      <ProductSignUpForm />
    </div>
  </>
);

export default ProductSignUp;
