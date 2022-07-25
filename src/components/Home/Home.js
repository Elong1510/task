import NewestPost from './Post/NewestPost/NewestPost';
import SearchView from './Post/SearchView/SearchView';
import GridView from './Post/Grid/GridView';
import ListView from './Post/List/ListView';
import RelatedNews from './Post/RelatedNews/RelatedNews';
import CourseStore from './Post/CourseStore/CourseStore';
import Carousel from './Carousel/Carousel';
import Video from './Post/Video/Video';
import './Home.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Carousel />
                    <div className="row">
                        <div className="col-8">
                            {/* Newest post */}
                            <div className="mb-3">
                                <NewestPost />
                            </div>
                            {/* Search bar, Grid view and List view */}
                            <div className="mb-3">
                                <BrowserRouter>
                                    <Routes>
                                        <Route path="/" element={<SearchView />} >
                                            <Route index element={<GridView />} />
                                            <Route path="Grid" element={<GridView />} />
                                            <Route path="List" element={<ListView />} />
                                        </Route>
                                    </Routes>
                                </BrowserRouter>
                            </div>
                        </div>
                        <div className="col-4">
                            {/* Related News */}
                            <div className="mb-3">
                                <RelatedNews />
                            </div>
                            {/* Course Store */}
                            <div className="mb-3">
                                <CourseStore />
                            </div>
                            <div className="mb-3">
                                <Video />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;