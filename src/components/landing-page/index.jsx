"use client";
import { Card1Section } from "./card1-section";
import { SimpleSlider3 } from "./carousel3";
import SimpleSlider2 from "./carousel2";
import { GallerySection } from "./galery-section";
import SimpleSlider from "./carousel";
export const ComponentLandingPage = () => {
  return (
    <>
      <div className="relative">
        <SimpleSlider />
        <SimpleSlider2 />
        <SimpleSlider3 />
        <Card1Section />
        <GallerySection />
      </div>
    </>
  );
};
