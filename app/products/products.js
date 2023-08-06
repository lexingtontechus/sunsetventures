"use client";

import { useState, useEffect } from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    },
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export default function Products() {
  const { isSignedIn, isLoading, user } = useUser();
  const [products, setproducts] = useState(null);

  return (
    <main>
      <div className="hero min-h-screen svg-products">
        {/*<div className="hero-overlay"></div>*/}
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-4 text-5xl font-bold uppercase">SVI Products</h1>
            <p className="my-8 text-2xl font-semibold">
              Investment Management.
            </p>
          </div>
        </div>
      </div>

      {isLoading ? (
        <></>
      ) : (
        <main className="container mx-auto p-8">
          <div className="">
            {isSignedIn ? (
              <>
                {/*<AddProductForm products={products} setproducts={setproducts} />*/}
                <div className="container mx-auto m-8">
                  <ProductList products={products} setproducts={setproducts} />
                </div>
              </>
            ) : (
              <div className="">Sign in to create your product list!</div>
            )}
          </div>
        </main>
      )}
    </main>
  );
}

const ProductList = ({ products, setproducts }) => {
  const { session } = useSession();
  const [loadingproducts, setLoadingproducts] = useState(true);

  // on first load, fetch and set products
  useEffect(() => {
    const loadproducts = async () => {
      try {
        setLoadingproducts(true);
        const supabaseAccessToken = await session.getToken({
          template: "sunsetventures",
        });
        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: products } = await supabase
          .from("products")
          .select("*,prices(*)")
          .eq("active", true);
        setproducts(products);
      } catch (e) {
        alert(e);
      } finally {
        setLoadingproducts(false);
      }
    };
    loadproducts();
  }, []);

  // if loading, just show basic message
  if (loadingproducts) {
    return <div className="">Loading...</div>;
  }

  // display all the products
  return (
    <>
      {products?.length > 0 ? (
        <div className="flex flex-wrap gap-4 content-center justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="grow card w-48 bg-base-200 shadow-xl"
            >
              <figure>
                <img
                  src="/img/logo-sunset.svg"
                  alt="Sunset Ventures"
                  className="p-4 h-32"
                />
              </figure>
              <div className="card-body">
                <div class="card-title text-2xl font-bold text-accent">
                  {product.name}
                </div>
                <div>{product.description}</div>
                {/* <div>
                    <pre>{JSON.stringify(product.metadata)}</pre>
          </div>*/}
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Subscribe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-accent">No products available</div>
      )}
    </>
  );
};

function AddProductForm({ products, setproducts }) {
  const { session } = useSession();
  const [newProduct, setNewProduct] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newProduct === "") {
      return;
    }

    const supabaseAccessToken = await session.getToken({
      template: "sunsetventures",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data } = await supabase
      .from("products")
      .insert({ title: newProduct, user_id: session.user.id })
      .select();

    setproducts([...products, data[0]]);
    setNewProduct("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNewProduct(e.target.value)}
        value={newProduct}
      />
      &nbsp;<button>Add Product</button>
    </form>
  );
}
