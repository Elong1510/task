import './Video.css';

const Video = (props) => {
    return (
        <>
            <div className="post-box">
                <p className="text-20 fw-bold">Video</p>
                <div className="video-post">
                    <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/UDVtMYqUAyw" frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video" />
                </div>
            </div>
        </>
    );
}
export default Video;