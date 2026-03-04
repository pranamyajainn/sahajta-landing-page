import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OnlyAgencyThatShips from "@/components/OnlyAgencyThatShips";
import Services from "@/components/Services";
import FeaturedProduct from "@/components/FeaturedProduct";
import Team from "@/components/Team";
import BookACall from "@/components/BookACall";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <OnlyAgencyThatShips />
            <Services />
            <FeaturedProduct />
            <Team />
            <BookACall />
            <Footer />
        </main>
    );
}
