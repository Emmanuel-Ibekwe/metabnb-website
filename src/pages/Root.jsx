import { Outlet } from "react-router";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
export default function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
