import Post from "./Post/Post/Post";
import SearchView from "./Post/SearchView/SearchView";
import RelatedNews from "./Post/RelatedNews/RelatedNews";
import CourseStore from "./Post/CourseStore/CourseStore";
import Carousel from "./Carousel/Carousel";
import Video from "./Post/Video/Video";
import { BsYoutube } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi";
import { AiFillFire } from "react-icons/ai";
import "./Home.css";
const Home = (props) => {
  return (
    <>
      <div className="col-12">
        <Carousel />
        <div className="row">
          <div className="col-8">
            {/* Newest post */}
            <div className="mb-3 mt-4">
              <p className="bg-title-banner">
                Newest news <AiFillFire className="ms-2 fire-color" />
              </p>
              <Post />
            </div>
            {/* Search bar, Grid view and List view */}
            <div className="mb-3">
              <SearchView />
            </div>
          </div>
          <div className="col-4">
            {/* Related News */}
            <div className="mt-4">
              <p className="bg-title2">
                Related News <BiNews className="ms-2 news-color" />
              </p>
              <RelatedNews />
            </div>
            {/* Course Store */}
            <div className="mt-4">
              <p className="bg-title">
                Course Store <HiAcademicCap className="ms-2 course-color" />
              </p>
              <CourseStore />
            </div>
            <div className="mt-4">
              <p className="bg-title1">
                Youtube <BsYoutube className="ms-2 youtube-color" />
              </p>
              <Video />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
