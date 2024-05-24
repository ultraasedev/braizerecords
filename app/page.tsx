import { HomeSlider } from "@/components/widgets/homeSlider";
import ArtGallery from "@/components/widgets/artgallery";
import  NewsSection  from "@/components/widgets/newsSection";
import ReleaseSection from "@/components/widgets/releaseSection";
import ServiceSection from "@/components/widgets/serviceSection";




export default function Home() {

  return (
    <>
     <HomeSlider />
    <ArtGallery />
    <ReleaseSection/>
    <ServiceSection/>
    <NewsSection/>
    </>
   
   
  );
}
