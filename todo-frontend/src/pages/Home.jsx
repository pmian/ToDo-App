import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import CTA from "../components/home/CTA";
import FAQ from "../components/home/FAQ";
import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Reviews from "../components/home/Reviews";

function Home() {
    return (
        <>
            <BackgroundImage>
                <HeroSection />
            </BackgroundImage>
            <Features />
            <HowItWorks />
            <Reviews />
            <FAQ />
            <CTA />
        </>
    );
}

export default Home;
