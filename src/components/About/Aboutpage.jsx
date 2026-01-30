import ShowcasingTimeline from "./ShowcasingTimeline";
// import VideoShot from "./VideoShot";
import FounderDetails from "./FounderDetails";
import Banner from "../Helper/Banner";

export default  function About () {
    return  (
        <>
        {/* <Banner /> */}
        <div className="bg-gradient-to-r from-[#0E5543] to-[#0E5543] py-6 md:py-16 text-white text-center px-4">
            <p className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 mt-20 sm:mt-12">About Us</p>
            <p className="text-base md:text-xl opacity-90">Discover Our Journey in Stone Excellence - 50+ Years of Crafting Premium Marble, Granite & Sandstone</p>
        </div>
        <ShowcasingTimeline/>
        {/* <VideoShot/> */}
        <FounderDetails/>
        </>
    )
}