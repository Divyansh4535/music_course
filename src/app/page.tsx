import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import FeatureSection from "@/Components/FeatureSection";
import WhyChooseUs from "@/Components/WhyChooseUs";
import DestimonialCards from "@/Components/DestimonialCards";
import UpComingWeb from "@/Components/ui/UpComingWeb";
import Instractor from "@/Components/Instractor";



export default function Home() {
  return (
    <>
     <div className=" flex items-center justify-center relative w-full">
          <Navbar />
        </div>
        <HeroSection />
        <FeatureSection />
        <WhyChooseUs />
        <DestimonialCards />
        <UpComingWeb />
        <Instractor />
       </>
  );
}
