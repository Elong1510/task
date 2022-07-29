const FormContact = (props) => {
return (
<>
<form action="" method="">
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput" className="form-label">Phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput" placeholder="0967847630"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Request</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="d-grid">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
</>
);
}
export default FormContact;