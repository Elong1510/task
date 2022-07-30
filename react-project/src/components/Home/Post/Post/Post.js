import hinh1 from "../img/hinh1.jpg";
import "./Post.css";
import { Link } from "react-router-dom";

const NewestPost = (props) => {
  return (
    <>
      <Link
        to="/PostDetail"
        style={{ textDecoration: `none`, color: `#212121` }}
      >
        <div className="post">
          <img className="post-img" src={hinh1} alt="" />
          <div className="post-info">
            <p className="fw-bold text-18">Post Name</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quos non voluptas accusantium eveniet nobis quia ducimus assumenda
              iure facere a nam odio, eum quisquam mollitia explicabo itaque
              laudantium enim?
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default NewestPost;
