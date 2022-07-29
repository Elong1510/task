import hinh2 from './img/hinh2.jpg'
import './AboutUs.css'
const AboutUs = (props)=> {
return (
<>
<div className="row">
    <div className="col-6">
        <img src={hinh2} className="w-100" alt='...' />
    </div>
    <div className="col-6">
        <p className="lorem-title">Why Us</p>
        <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
</div>
</>
);
}

export default AboutUs;