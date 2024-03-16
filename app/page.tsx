import { HomeSlider } from "@/components/widgets/homeSlider";
import ArtGallerey from "@/components/widgets/artgallery";
import  NewsSection  from "@/components/widgets/newsSection";
import ReleaseSection from "@/components/widgets/releaseSection";
import ServiceSection from "@/components/widgets/serviceSection";




export default function Home() {

  return (
    <>
     <HomeSlider />
    <ArtGallerey />
    <ReleaseSection/>
    <ServiceSection/>
    <NewsSection/>
    </>
   
   
  );
}
