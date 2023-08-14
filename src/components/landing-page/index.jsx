import { Card1Section } from "./card1-section";
import { CarouselSection } from "./carousel";
import { GallerySection } from "./galery-section";
export const ComponentLandingPage = () => {
  return (
    <>
      <div className="relative">
        <CarouselSection />
        <Card1Section />
        <GallerySection />
      </div>
    </>
  );
};
