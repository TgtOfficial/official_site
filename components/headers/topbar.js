import React from 'react'

const topbar = () => {
    return (
        <>
        <div className="topbardiv  ">
        <div className="container">
            <div className="r">
            <a href="#" className="toplink">Job Guarantee</a>
            <a href="#" className="toplink">Free Online Courses</a>
            <a href="#" className="toplink">Resources</a>
            <a href="#" className="toplink">Corporate Training</a>
            <a href="#" className="toplink">Become an Instructor</a>
            <a href="#" className="toplink">Hire From Us</a>
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