import Pricing from "./pricing"
import { getActiveProductsWithPrices } from "../../utils/supabase-client"

export default function PricingPage({ products }) {
  return <Pricing products={products} />
}

export async function getStaticProps() {
  const products = await getActiveProductsWithPrices()

  return {
    props: {
      products
    },
    revalidate: 60
  }
}
