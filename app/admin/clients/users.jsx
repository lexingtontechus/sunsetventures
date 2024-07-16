import { neon } from "@neondatabase/serverless";

export async function getStaticProps() {
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`SELECT version(*) from users`;
  return { props: { data: response[0].version } };
}

export default function Page({ data }) {
  return <>{data}</>;
}
