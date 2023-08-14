"use client";
import { Card1Section } from "./card1-section";
import SimpleSlider from "./carousel2";
import { GallerySection } from "./galery-section";
export const ComponentLandingPage = () => {
  return (
    <>
      <div className="relative">
        <SimpleSlider />
        <Card1Section />
        <GallerySection />
      </div>
    </>
  );
};
