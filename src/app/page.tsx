import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdvantagesBar from "@/components/AdvantagesBar";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import WorkSteps from "@/components/WorkSteps";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdvantagesBar />
        <Services />
        <TrustSection />
        <WorkSteps />
        <Portfolio limit={5} />
      </main>
      <Footer />
    </>
  );
}
