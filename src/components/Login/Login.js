import './Login.css';
const Login = (props) => {
    return (
        <>
            <form action="">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                            <p className="title">Login</p>
                            <div className="">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="********" />
                                </div>
                                <div className="d-grid">
                                    <button className="btn-signin mt-3" type="submit">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Login;