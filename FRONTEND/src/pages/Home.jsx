import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import RecentIssuesSection from "../components/home/RecentIssuesSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RecentIssuesSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;