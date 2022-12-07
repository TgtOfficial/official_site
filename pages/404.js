import Header1 from '../components/headers/header1'

function login() {

    return (
        <> <Header1/>
            <div className="error-page ds m-5">
               
                <div className="content">
                    <h1 data-text="404">404</h1>
                    <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
                    <p>Sorry, the page you{"'"}re looking for doesn{"'"}t exist. If you think
                        something is broken, report a problem.
                    </p>
                    <div className="btns">
                        <a href="#">return home</a>
                        <a href="#">report problem</a>
                    </div>
                </div>
            </div>
            <style>
                {
                    `
                    .error-page{
                        position: fixed;
                        top: 10%;
                        left: 17%;
                        right: 17%;
                        bottom: 10%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background:rgb(240 247 246);
                        box-shadow: 0px 5px 10px rgba(28, 135, 37, 0.1);
                    }
                    .error-page .content{
                        max-width: 600px;
                        text-align: center;    
                    }
                    .content h1{
                        font-size: 18vw;
                        line-height: 1em;
                        position: relative;
                    }
                    .content h1:after{
                        position: absolute;
                        content: attr(data-text);
                        top: 0;
                        left: 0;
                        right: 0;
                        background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #157cc1, #6bd283, #29914f, #6bd283, #157cc1, #085012);
                        height: 100vh;
                        background-size: 400%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        text-shadow: 1px 1px 2px rgba(10, 132, 18, 0.1);
                        animation: animate 10s ease-in-out infinite;
                    }
                    @keyframes animate{
                        0%{
                            background-position: 0 0;
                        }
                        25%{
                            background-position: 100% 0;
                        }
                        50%{
                            background-position: 100% 100%;
                        }
                        75%{
                            background-position: 0 100%;
                        }
                        100%{
                            background-position: 0 0;
                        }
                    }  
                    .content h4{
                        margin-bottom: 20px;
                        text-transform: uppercase;
                        color: #000;
                        max-width: 600px;
                        font-size: 2em;
                    }
                    .content h4:after{
                        position: absolute;
                        content: atter(data-text);
                        top:0;
                        left:0;
                        right:0;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        text-shadow: 1px 1px 2px rgba(10, 132, 18, 0.1);
                        animation: animate 10s ease-in-out infinite;
                    }
                    .content p{
                        font-size: 1.2em;
                        color: #0f1010;
                    }
                    .content .btns{
                        margin: 25px 0;
                        display: inline-flex;
                    }
                    .content .btns a{
                        display: inline-block;
                        margin: 0 10px;
                        text-decoration: none;
                        border: 2px solid #205c84;
                        color: #2a0972;
                        font-weight: 500;
                        padding: 10px 25px;
                        border-radius: 25px;
                        text-transform: uppercase;
                        transition: all 0.3s ease;
                    }
                    .content .btns a:hover{
                        color: rgb(174, 228, 204);
                        background: #053e64;
                    }
                `
                }
            </style>

        </>
    )
}
export default login