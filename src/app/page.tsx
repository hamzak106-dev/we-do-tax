import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import HomeDetails from "@/components/HomeDetails/HomeDetails";
import Footer from "@/components/Footer/Footer";
import Testimonials from "@/components/Testnomials/Testimonials";
export default function HomePage() {
  return (
    <main>
      <Header />
      <Banner />
      <Services />
      <About />
      <HomeDetails />
      <Testimonials />
      <Footer />
    </main>
  );
}
