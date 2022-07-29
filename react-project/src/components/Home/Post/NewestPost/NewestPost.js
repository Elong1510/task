import hinh1 from '../img/hinh1.jpg';
import './NewestPost.css';

const NewestPost = (props) => {
    return (
        <>
            <div className="post-box">
                <div className="row">
                    <p className="mb-2 fw-bold text-20">Newest news</p>
                    <div className="post">
                        <img className="post-img" src={hinh1} alt="" />
                        <div className="post-info">
                            <p className="fw-bold text-18">Post Name</p>
                            <p className="description" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos non voluptas accusantium eveniet nobis quia ducimus assumenda iure facere a nam odio, eum quisquam mollitia explicabo itaque laudantium enim?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewestPost;