import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OnlyAgencyThatShips from "@/components/OnlyAgencyThatShips";
import HowSahajtaShips from "@/components/HowSahajtaShips";
import Services from "@/components/Services";
import RecentShips from "@/components/RecentShips";
import Testimonials from "@/components/Testimonials";
import FeaturedProduct from "@/components/FeaturedProduct";
import Team from "@/components/Team";
import UrgencyBanner from "@/components/UrgencyBanner";
import BookACall from "@/components/BookACall";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Hero */}
            <Hero />

            {/* 3. OnlyAgencyThatShips (includes proof ticker + two-column proof) */}
            <OnlyAgencyThatShips />

            {/* 4. How Sahajta Ships — 4-step horizontal timeline */}
            <HowSahajtaShips />

            {/* 5. Services — 3 cards */}
            <Services />

            {/* 6. Recent Ships — product mini-cards */}
            <RecentShips />

            {/* 7. Testimonials — 2×2 grid */}
            <Testimonials />

            {/* 8. FeaturedProduct — transformation block + stats */}
            <FeaturedProduct />

            {/* 9. Team — with sprout bio bullets */}
            <Team />

            {/* 10. Urgency Banner */}
            <UrgencyBanner />

            {/* 11. BookACall — inline Cal.com embed + email */}
            <BookACall />

            {/* 12. Footer */}
            <Footer />
        </main>
    );
}
