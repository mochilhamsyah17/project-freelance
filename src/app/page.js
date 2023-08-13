import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { LandingPage } from "./landing-page";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}
