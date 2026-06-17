import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Consultancy from "@/components/Consultancy";
import Investment from "@/components/Investment";
import CaseStudy from "@/components/CaseStudy";
import Academy from "@/components/Academy";
import Technology from "@/components/Technology";
import Governance from "@/components/Governance";
import Foundation from "@/components/Foundation";
import ExpertCall from "@/components/ExpertCall";
import SokoFranchise from "@/components/SokoFranchise";
import Scorecard from "@/components/Scorecard";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import Engagement from "@/components/Engagement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SEO 
        title="i Link International | Bridging Capital, Innovation & Global Markets"
        description="i Link International — your strategic gateway to sustainable economic growth. Consultancy, investment, i Link Academy and proprietary digital platforms across Africa and beyond."
      />
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <Consultancy />
      <Investment />
      <CaseStudy />
      <Academy />
      <Technology />
      <Governance />
      <Foundation />
      <ExpertCall />
      <SokoFranchise />
      <Scorecard />
      <Benefits />
      <Partners />
      <Engagement />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
