import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import RecentIssuesSection from "../components/home/RecentIssuesSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RecentIssuesSection />
      <CTASection />
    </>
  );
};

export default Home;