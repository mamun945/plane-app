import Image from "next/image";
import BannerPage from "./components/Banner";
import AllPlants from "./components/AllPlane";

export default function Home() {
  return (
    <div className="container mx-auto">
     <BannerPage></BannerPage>
     <AllPlants></AllPlants>
    </div>
  );
}
