import React from 'react'

const topbar = () => {
    return (
        <>
        <div className="topbardiv  ">
        <div className="container">
            <div className="r">
            <a href={"/job-guarantee-programs"} className="toplink">Job Guarantee</a>
            <a href={"/online-courses"} className="toplink">Free Online Courses</a>
            <a href={"/online"} className="toplink">Resources</a>
            <a href={"/corporate-training"} className="toplink">Corporate Training</a>
            <a href={"/become-an-instructor"} className="toplink">Become an Instructor</a>
            <a href={"/hire-from-us"} className="toplink">Hire From Us</a>
            </div>
            </div>
        </div>
        <style>
            {
                `
.topbardiv{
    background:#e6ecef;
    padding:2px;
}
                `
            }
        </style>
        </>
    )
}

export default topbar