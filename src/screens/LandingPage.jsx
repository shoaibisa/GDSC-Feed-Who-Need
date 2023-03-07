import React from "react";
import HeroHome from './partials/HeroHome';
import FeaturesBlocks from "./partials/FeaturesBlocks";
import FeaturesZigZag from './partials/FeaturesZigzag';
import Testimonials from "./partials/Testimonials";
import Footer from './partials/Footer'
import Gallery from "./partials/Gallery";
const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
    {/*  Site header */}
    {/* <Header /> */}

    {/*  Page content */}
    <main className="grow">
      {/*  Page illustration */}
      {/* <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div> */}

      {/*  Page sections */}
      <HeroHome />
      <FeaturesBlocks />
      <FeaturesZigZag />
       <Testimonials topDivider/>
      <Gallery/>
     {/* <Newsletter /> */}
    </main>

    {/* <Banner /> */}

    {/*  Site footer */}
    <Footer />
  </div>

  );
};
export default LandingPage;
