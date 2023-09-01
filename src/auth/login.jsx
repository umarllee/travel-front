import "./login.scss"
import travelLogo from "../assets/travelLogo.png"
import { useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate();

    function handleLogin(){
        navigate('main')
    }

    return <> 
        <div className="row m-0">
            <div className="col-sm-6 travel-logo ">
                <img src={travelLogo} alt="" />
            </div>
            <div className="col-sm-6 d-flex ">
                <div className="form-container p-4 col-lg-10">
                    <div className="row m-0">
                        <div className="col-sm-12">
                            <div className="field">
                                <label htmlFor="username" data-title="" className="ms-1 mb-1">Username</label>
                                <input type="username" autoComplete="off" id="username" name="username" />
                            </div>
                        </div>
                        <div className="col-sm-12 mt-3">
                            <div className="field">
                                <label htmlFor="password" data-title="" className="ms-1 mb-1">Password</label>
                                <input type="password" autoComplete="off" id="password" name="password" />
                            </div>
                        </div>

                        <div className="col-sm-12 mt-4">
                            <button className="login mt-2" onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>

}

export default Login;