import "@/styles/globals.css";
import Layout from "@/layouts/Layout";
import { StoreProvider } from "@/contexts/storeContext";
export default function App({ Component, pageProps }) {
  return (
    // Wrappin the Layout component in the StoreProvider makes Layout able to ascess the data in the StoreProvider.
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
