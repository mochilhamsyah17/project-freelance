"use client";
import { Card1Section } from "./card1-section";
import { GallerySection } from "./galery-section copy";
import SimpleSlider from "./carousel";
import { TestimonySection } from "./testimony";
import { BranchSection } from "./branch-office";
import Whatsapp from "../../../public/assets/wa-img.webp";
import Image from "next/image";

export const ComponentLandingPage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={Whatsapp}
          alt="icon whatsapp"
          className="fixed bottom-8 right-8 z-50 w-20 cursor-pointer"
        />
        <SimpleSlider />
        <Card1Section />
        <GallerySection />
        <TestimonySection />
        <BranchSection />
      </div>
    </>
  );
};
