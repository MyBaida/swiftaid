import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ScreenshotViewer from "@/components/ScreenshotViewer";
import ArchitectureSection from "@/components/ArchitectureSection";
import ResultsSection from "@/components/ResultsSection";
import AboutProject from "@/components/AboutProject";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <ScreenshotViewer />
      <ArchitectureSection />
      <ResultsSection />
      <AboutProject />
      <Footer />
    </main>
  );
}
