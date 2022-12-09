function contact() {

    return (
        <>
            <div className="main">
                <div className="titlediv container">
                    <h2 className="title pb-3 pt-5">Contact Us</h2>
                    <p className="subhead mb-5" >Access quality candidate profiles directly from The Generic Technology</p>
                </div>
                <div className="formdiv container">
                    <form className="pb-5">
                        <div className="f1st d-flex justify-content-between mt-3">
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input type="text" className="name form-control" placeholder="Enter Name ?" />
                            </div>
                            <div className="form-group">
                                <label  className="form-label"htmlFor="email">Email</label>
                                <input type="text" className="email form-control" placeholder="Enter Email ?" />
                            </div>
                        </div>
                        <div className="f2st d-flex justify-content-between mt-3">
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <input type="text" className="phone form-control" placeholder="Enter Phone Number ?" />
                            </div>
                            <div className="form-group">
                                <label  className="form-label" htmlFor="email">Company Name</label>
                                <input type="text" className="email form-control" placeholder="Enter Company Name ?" />
                            </div>
                        </div>
                        <div className="form-g mt-3 mb-2">
                            <label htmlFor="selectform" className="form-label">Hiring For</label>
                            <select name="selectform" id="idselect" className="form-select">
                                <option value="1">Full Stack Developers</option>
                                <option value="2">Automation testing</option>
                                <option value="3">Others</option>
                            </select>
                        </div>
                        <div className="form-g mt-3 mb-2">
                            <label htmlFor="textarea" className="textarea mb-2">Message</label>
                            <textarea className="form-control" name="message" id="messages" >Enter message</textarea>
                        </div>
                        <div className="form-g2 w-100">
                            <button type="submit" className="btn btns btn-primary m-auto">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            <style jsx>
                {
                    `
.main{
    background:#F6F6FF;
}
.form-g2{
    display:flex;
    align-item:center;
}
.btns{
    padding:12px 18px;
    margin:14px auto !important;
}
.form-group{
    width:46%;
}
@media(max-width:992px){
.f2st {
    flex-direction: column !important;
}
select option{
    width:100%;
}

.f1st {
    flex-direction: column !important;
  }
  .form-group{
    width:100%;
}
}
        `
                }
            </style>

        </>
    )
}
export default contact