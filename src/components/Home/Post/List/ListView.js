import hinh2 from '../img/hinh2.jpg';
import './ListView.css';

const ListView = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-12 mb-3">
                    <div className="list-box">
                        <div className="list-post-img" style={{ backgroundImage: `url(${hinh2})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div>
                        <div className="content">
                            <span className='date'>2022. 10-15</span>
                            <p className='author'>Created by Long</p>
                            <p className='title-list'>List Post Name</p>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ex, aspernatur tempore eius tenetur, rerum odit aliquid ratione soluta explicabo nulla consequatur iure dicta nisi nostrum mollitia corrupti quisquam officiis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="list-box">
                        <div className="list-post-img" style={{ backgroundImage: `url(${hinh2})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div>
                        <div className="content">
                            <span className='date'>2022. 10-15</span>
                            <p className='author'>Created by Long</p>
                            <p className='title-list'>List Post Name</p>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ex, aspernatur tempore eius tenetur, rerum odit aliquid ratione soluta explicabo nulla consequatur iure dicta nisi nostrum mollitia corrupti quisquam officiis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="list-box">
                        <div className="list-post-img" style={{ backgroundImage: `url(${hinh2})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div>
                        <div className="content">
                            <span className='date'>2022. 10-15</span>
                            <p className='author'>Created by Long</p>
                            <p className='title-list'>List Post Name</p>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ex, aspernatur tempore eius tenetur, rerum odit aliquid ratione soluta explicabo nulla consequatur iure dicta nisi nostrum mollitia corrupti quisquam officiis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="list-box">
                        <div className="list-post-img" style={{ backgroundImage: `url(${hinh2})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div>
                        <div className="content">
                            <span className='date'>2022. 10-15</span>
                            <p className='author'>Created by Long</p>
                            <p className='title-list'>List Post Name</p>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ex, aspernatur tempore eius tenetur, rerum odit aliquid ratione soluta explicabo nulla consequatur iure dicta nisi nostrum mollitia corrupti quisquam officiis.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ListView;