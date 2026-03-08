import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OnlyAgencyThatShips from "@/components/OnlyAgencyThatShips";
import Services from "@/components/Services";
import RecentShips from "@/components/RecentShips";
import FeaturedProduct from "@/components/FeaturedProduct";
import WhyAI from "@/components/WhyAI";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import Testimonials from "@/components/Testimonials";
import HowSahajtaShips from "@/components/HowSahajtaShips";
import Reality from "@/components/Reality";
import Team from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import UrgencyBanner from "@/components/UrgencyBanner";
import IndustryVoices from "@/components/IndustryVoices";
import BookACall from "@/components/BookACall";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <OnlyAgencyThatShips />
            <Services />
            <RecentShips />
            <FeaturedProduct />
            <WhyAI />
            <WhoWeHelpSection />
            <Testimonials />
            <HowSahajtaShips />
            <Reality />
            <Team />
            <Pricing />
            <UrgencyBanner />
            <IndustryVoices />
            <BookACall />
            <FAQ />
            <Footer />
        </main>
    );
}
