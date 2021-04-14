import Navigation from "../components/navigation";
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
