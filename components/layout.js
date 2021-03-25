import Navigation from "../components/nav";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
