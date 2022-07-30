import "./Video.css";

const Video = (props) => {
  return (
    <>
      <div className="video-post">
        <iframe
          className="ratio ratio-1x1"
          src="https://www.youtube.com/embed/UDVtMYqUAyw"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </>
  );
};
export default Video;
