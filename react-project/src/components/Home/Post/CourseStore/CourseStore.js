import hinh3 from "../img/hinh3.jpg";
import "./CourseStore.css";

const CourseStore = (props) => {
  return (
    <>
      <div className="mt-3 d-flex justify-content-between post-overflow-x">
        <div className="course-box">
          <div
            className="course-img"
            style={{
              backgroundImage: `url(${hinh3})`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
            }}
          ></div>
          <div className="course-content">
            <span className="title-course">React Tutorial</span>
            <p className="title-small">From the noob to the smurf</p>
            <p className="price">$30</p>
          </div>
        </div>
        <div className="course-box">
          <div
            className="course-img"
            style={{
              backgroundImage: `url(${hinh3})`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
            }}
          ></div>
          <div className="course-content">
            <span className="title-course">React Tutorial</span>
            <p className="title-small">From the noob to the smurf</p>
            <p className="price">$30</p>
          </div>
        </div>
        <div className="course-box">
          <div
            className="course-img"
            style={{
              backgroundImage: `url(${hinh3})`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
            }}
          ></div>
          <div className="course-content">
            <span className="title-course">React Tutorial</span>
            <p className="title-small">From the noob to the smurf</p>
            <p className="price">$30</p>
          </div>
        </div>
        <div className="course-box">
          <div
            className="course-img"
            style={{
              backgroundImage: `url(${hinh3})`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
            }}
          ></div>
          <div className="course-content">
            <span className="title-course">React Tutorial</span>
            <p className="title-small">From the noob to the smurf</p>
            <p className="price">$30</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseStore;
