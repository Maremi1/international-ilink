import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Consultancy from "@/components/Consultancy";
import Academy from "@/components/Academy";
import Investment from "@/components/Investment";
import Technology from "@/components/Technology";
import Governance from "@/components/Governance";
import Foundation from "@/components/Foundation";
import Benefits from "@/components/Benefits";
import Engagement from "@/components/Engagement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <Consultancy />
      <Academy />
      <Investment />
      <Technology />
      <Governance />
      <Foundation />
      <Benefits />
      <Engagement />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
