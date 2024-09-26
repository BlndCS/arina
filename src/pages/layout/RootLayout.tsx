import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full bg-primary text-white font-body">
        <section className="w-full flex flex-row justify-center items-center pb-[100px]">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
