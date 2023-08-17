"use client";
import { Card1Section } from "./card1-section";
import { GallerySection } from "./galery-section";
import SimpleSlider from "./carousel";
import { TestimonySection } from "./testimony";
import { BranchSection } from "./branch-office";

export const ComponentLandingPage = () => {
  return (
    <>
      <div className="relative">
        <SimpleSlider />
        <Card1Section />
        <GallerySection />
        <TestimonySection />
        <BranchSection />
      </div>
    </>
  );
};
