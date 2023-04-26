// import Anchor from "./Anchor";
import Basket from "@/components/Basket";

export default function Layout({ children, navData }) {
  console.log(navData);
  return (
    <>
      <nav>
        <a href="/">Home</a>
      </nav>
      <main>{children}</main>
      <Basket />
      <footer>Footer</footer>
    </>
  );
}
