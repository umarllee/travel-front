import "./login.scss"
import travelLogo from "../assets/travelLogo.png"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

    const form = useForm();

    const { register, handleSubmit, formState: { errors }, } = form;

    let navigate = useNavigate();

    function handleLogin(data) {
        console.log(data)
        navigate('main/order');
    }

    return <>
        <div className="row m-0 page">
            <div className="col-sm-6 travel-logo ">
                <img src={travelLogo} alt="" />
            </div>
            <div className="col-sm-6 d-flex ">
                <div className="form-container p-4 pt-5 col-lg-10">

                    <form onSubmit={handleSubmit((data) => handleLogin(data))}>
                        <div className="row m-0">
                            <div className="col-sm-12">
                                <div className="field">
                                    <label htmlFor="username" data-title="" className="ms-1 mb-1">Username</label>
                                    <input type="text" {...register("username", { required: true })} autoComplete="off" id="username" name="username" />
                                    {errors.username &&  errors.username.type === "required" && <small >*Required field</small>}
                                    {/* {errors.username && errors.username.type === "maxLength" && <small>Max length exceeded</small>} */}
                                </div>
                            </div>

                            <div className="col-sm-12 mt-4 pt-2">
                                <div className="field">
                                    <label htmlFor="password" data-title="" className="ms-1 mb-1">Password</label>
                                    <input type="password" {...register("password", { required: true })} autoComplete="off" id="password" name="password" />
                                    {errors.password &&  errors.password.type === "required" && <small >*Required field</small>}
                                    {/* {errors.password && errors.password.type === "maxLength" && <small>Max length exceeded</small>} */}
                                </div>
                            </div>

                            <div className="col-sm-12 mt-4">
                                <button type="submit" className="login mt-2" >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>

}

export default Login;