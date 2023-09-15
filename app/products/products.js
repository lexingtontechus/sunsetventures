"use client";

const products = [
  {
    name: "Vesper",
    tagline: "Start your portfolio",
    price: "$500 per month",
    action: "Subscribe",
    description:
      "Wealth builder to create a recurring income stream. Focused on One (1) Forex pair.",
    accountsize: "Account size between $5000-$25000.",
    producturl: "/product-vesper.svg",
  },
  {
    name: "Crescent",
    tagline: "Supercharge your portfolio.",
    price: "$1000 per month",
    action: "Subscribe",
    description: "Financial growth strategy. Focused on Two (2) Forex pairs.",
    accountsize: "Account size between $25000-$50000.",
    producturl: "/product-crescent.svg",
  },
  {
    name: "Aurora",
    tagline: "Diversified portfolio",
    price: "$2500 per month",
    action: "Subscribe",
    description: "Focused on Three (3) Forex pairs & One (1) Crypto ETF.",
    accountsize: "Account size between $50000-$100000.",
    producturl: "/product-aurora.svg",
  },
  {
    name: "Apollo",
    tagline: "Performance portfolio",
    price: "Contact To Discuss",
    action: "Contact",
    description: " Focused on Four (4) Forex pairs & Two (2) Crypto ETF.",
    accountsize: "Accounts over $100000.",
    producturl: "/product-apollo.svg",
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto m-8 text-center">
      <div className="hero min-h-screen svg-product">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-4 text-5xl font-bold uppercase">Products</h1>
            <p className="my-8 text-2xl font-semibold">Managed Portfolios.</p>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-xl mt-8">
        <h2 className="text-xl font-bold">
          Our products are designed to fit our client profiles. Discover a
          product that caters to and helps your financial portfolio grow.
        </h2>
      </section>
      <section className="mx-auto m-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="grow card card-bordered bg-base-100 shadow-xl max-w-[300px] max-h-[500px] rounded-xl glass text-center"
            >
              <figure className="image-full w-full h-32">
                <img src={item.producturl} alt={item.name} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold uppercase">
                  {item.name}
                </h2>
                <h3 className="font-semibold text-primary-content">
                  {item.tagline}
                </h3>
                <p className="text-sm text-primary-content">
                  {item.description}
                </p>
                <p className="text-sm text-primary-content">
                  {item.accountsize}
                </p>
                {/*<p className="font-semibold text-primary-content">
                  {item.price}
                </p>*/}
                {/*<div className="card-actions">
                  <button className="btn btn-accent glass">
                    {item.action}
                  </button>
          </div>*/}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-xl mb-8 pb-8">
        <div className="text-base">
          Sign In/Up and select a product. Our team will conduct an onboarding &
          KYC process prior to approving your account.
        </div>
      </section>
    </main>
  );
}
