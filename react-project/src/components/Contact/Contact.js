import hinh1 from "./img/hinh1.jpg";
import FormContact from "./FormContact";

const Contact = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <img src={hinh1} className="w-100" alt="..." />
        </div>
        <div className="col-6">
          <FormContact />
        </div>
      </div>
    </>
  );
};

export default Contact;
