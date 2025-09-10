import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import HomeDetails from "@/components/HomeDetails/HomeDetails";
import Footer from "@/components/Footer/Footer";
import Testimonials from "@/components/Testnomials/Testimonials";
import Faqs from "@/components/Resources/Faqs";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Header />
      <Banner />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <HomeDetails />
      <div id="faqs">
        <Faqs />
      </div>
      <Testimonials />
      <Footer />
    </main>
  );
}
