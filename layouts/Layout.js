// import Anchor from "./Anchor";

export default function Layout({ children, navData }) {
  console.log(navData);
  return (
    <>
      <nav>
        <a href="/">Home</a>
      </nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
