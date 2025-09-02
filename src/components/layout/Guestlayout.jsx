import Footer from "./Partials/Footer";
import Navbar from "./Partials/Navbar";

export default function GuestLayout({ children }) {
  return (
    <>
      <Navbar />
        <div className="space-y-32 md:px-12 px-5 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
