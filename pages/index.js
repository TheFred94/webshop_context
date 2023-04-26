import Head from "next/head";
import Product from "@/components/Product";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Total Scam Webshop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Home">
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
        <article>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </article>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Get data from api
  const res = await fetch("https://kea-alt-del.dk/t7/api/products");
  const data = await res.json();

  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
