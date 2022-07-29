
import hinh1 from './img/hinh1.jpg';
import hinh2 from './img/hinh2.jpg';
import hinh3 from './img/hinh3.jpg';
import './Carousel.css';

const Home = (props) => {
    return (
        <>
            <div className="box-2">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleSlidesOnly" className="carousel slide ratio ratio-16x9" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={hinh1} className="d-block img" alt="long" />
                                </div>
                                <div className="carousel-item">
                                    <img src={hinh2} className="d-block img" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={hinh3} className="d-block img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;