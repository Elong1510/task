import { Link } from "react-router-dom";
import hinh1 from "../img/hinh1.jpg";
import "./GridView.css";

const GridView = (props) => {
  return (
    <>
      <Link
        to="/PostDetail"
        style={{ textDecoration: `none`, color: `#212121` }}
      >
        <div className="col-6 mt-4">
          <div className="small-box">
            <span className="date">2022, 10-15</span>
            <p className="author">Created by Long</p>
            <div className="mt-2">
              <div
                className="post-img1"
                style={{
                  backgroundImage: `url(${hinh1})`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                }}
              ></div>
              <p className="title1">Small Post name</p>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              odio id voluptatem iusto, asperiores laboriosam necessitatibus
              quaerat, voluptates laborum, debitis placeat facere? Maxime
              deserunt repudiandae sapiente facere rerum a tenetur?
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default GridView;
