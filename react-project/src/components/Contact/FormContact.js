import "./FormContact.css";

const FormContact = (props) => {
  return (
    <>
      <form action="" method="">
        <div className="row">
          <div className="mt-5">
            <p className="text-30 fw-bold text-grey">Contact Me</p>
            <p className="text-14">
              Leave me a message, I will contact you as soon as possible.
            </p>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label for="name" className="form-label">
                Name
              </label>
            </div>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label for="email" className="form-label">
                Email
              </label>
            </div>
            <div className="form-field">
              <textarea
                type="text"
                className="form-control1"
                placeholder=" "
                rows="3"
              ></textarea>
              <label for="message" className="form-label1">
                Message
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-light-hover">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default FormContact;
