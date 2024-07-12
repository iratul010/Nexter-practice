import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Realtors from "../Component/Realtors";
import Sidebar from "../Component/Sidebar";
import StoryContent from "../Component/StoryContent";
import StoryPic from "../Component/StoryPic";
import Features from "../sections/Features";
import Gallery from "../sections/Gallery";
import Home from "../sections/Home";

 

const MainLayouts = () => {
  return (
    <div className="container">
        <Sidebar/>
        <Header/>
        <Realtors/>
        <Features/>
        <StoryPic/>
        <StoryContent/>
        <Home/>
        <Gallery/>
         <Footer/>
    </div>
  );
};

export default MainLayouts;