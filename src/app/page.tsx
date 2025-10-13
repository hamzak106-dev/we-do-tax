import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import HomeDetails from "@/components/HomeDetails/HomeDetails";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Footer from "@/components/Footer/Footer";
import Testimonials from "@/components/Testnomials/Testimonials";
import Faqs from "@/components/Resources/Faqs";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Header />
      <Banner />
      <WhyChooseUs />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <HomeDetails />
      <HowItWorks />
      <Testimonials />
      <div id="faqs">
        <Faqs />
      </div>
      <Footer />
    </main>
  );
}
