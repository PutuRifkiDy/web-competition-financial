import Footer from "./Partials/Footer";
import Navbar from "./Partials/Navbar";

export default function GuestLayout({ children }) {
  return (
    <>
      <Navbar />
        <div className="space-y-32 px-12 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
