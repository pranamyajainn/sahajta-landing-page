import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustryVoices from "@/components/IndustryVoices";
import OnlyAgencyThatShips from "@/components/OnlyAgencyThatShips";
import HowSahajtaShips from "@/components/HowSahajtaShips";
import Services from "@/components/Services";

import Testimonials from "@/components/Testimonials";
import FeaturedProduct from "@/components/FeaturedProduct";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import Team from "@/components/Team";
import Reality from "@/components/Reality";
import UrgencyBanner from "@/components/UrgencyBanner";
import BookACall from "@/components/BookACall";
import WhyAI from "@/components/WhyAI";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <IndustryVoices />
            <OnlyAgencyThatShips />
            <Services />

            <FeaturedProduct />
            <WhoWeHelpSection />
            <HowSahajtaShips />
            <Testimonials />
            <Reality />
            <Team />
            <UrgencyBanner />
            <BookACall />
            <WhyAI />
            <FAQ />
            <Footer />
        </main>
    );
}
