"use client";
import { Card1Section } from "./card1-section";
import { SimpleSlider3 } from "./carousel3";
import SimpleSlider2 from "./carousel2";
import { GallerySection } from "./galery-section";
import SimpleSlider from "./carousel";
import { TestimonySection } from "./testimony";
import { BranchSection } from "./branch-office";
export const ComponentLandingPage = () => {
  return (
    <>
      <div className="relative">
        <SimpleSlider />
        {/* <SimpleSlider2 />
        <SimpleSlider3 /> */}
        <Card1Section />
        <GallerySection />
        <TestimonySection />
        <BranchSection />
      </div>
    </>
  );
};
