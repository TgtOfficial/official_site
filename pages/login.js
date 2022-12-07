function login() {

    return (
        <>

            <div className="maindiv d-flex">
                <div className="leftdiv bg-white text-center p-5">
                    <div className="logotxt">
                        <img src="/tgt.png" alt="logo" />
                        <h2 className="heading mt-4">  Welcome back! </h2>
                        <p className="txt">Log in to continue learning</p>
                    </div>

                    <div className="form">
                        <form>

                            <div className="form-outline mb-4">
                                <input type="email" id="form2Example1" placeholder="Email Address *" className="form-control" />
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" id="form2Example2" placeholder="Password *" className="form-control" />
                            </div>


                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col">

                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>


                            <button type="button" className="btn w-100 btn-primary btn-block mb-4">Sign in</button>


                            <div className="text-center">
                                <p>Not a member? <a href="#!">Register</a></p>
                                <p>or sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                            <div className="container"><a href="/admin" className="btn btn-link">Authorised Login</a></div>
                        </form>

                    </div>
                </div>
                <div className="ri8 d-flex flex-column-reverse ">
                    <div className="container-fluid p-4 text-white">
                        <div className="right-heading">
                            World{"'"}s #1 online bootcamp
                        </div>
                        <div className="content">
                            Get started with your immersive learning experience
                        </div>
                        <div className="additional-content">
                            <span className="bold">2M</span> careers advanced<br />
                            <span className="bold">1500</span> live classes every month<br />
                            <span className="bold">85%</span> reported promotion or a new job
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {
                    `

.logotxt img{
    width:222px;
}
.leftdiv{
    width:50%;
}
.ri8{
    background: url(/login.png) no-repeat;
    background-size: cover;
    height: 100%;
    width:100%;
    min-height: 100vh;
}
 .right-heading {
    color: #fff;
    width: 100%;
    font-size: 36px;
    font-weight: 500;
}
.content {
    color: #fff;
    font-size: 22px;
    line-height: 1.5;
    width: 100%;
    font-weight: 500;
    padding-bottom: 15px;
}
.additional-content {
    color: #fff;
    padding-top: 18px;
    font-size: 16px;
    line-height: 2.5;
    width: 100%;
    font-weight: 300;
}
.heading{
    color: #2a2f32;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding-bottom: 8px;
}
@media(max-width:992px){
    .ri8{
        display:none !important;
    }
    .leftdiv{
        width:100% !important;
    }
    .maindiv{
        height:130vh;
        position:fixed;
    }
}
                `
                }
            </style>

        </>
    )
}
export default login