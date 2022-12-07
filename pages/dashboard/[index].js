import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import Header2 from '../../components/headers/header2'
import axios from 'axios';




const Index = () => {
    const router = useRouter();
    const token = router.query.index
    console.log(token)


    var axios = require('axios');
    var data = JSON.stringify({
        "token": token
    });

    var config = {
        method: 'post',
        url: 'http://localhost/tgt/user.php',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));


            if (response.data.token == token) {


            }
            else {
                Router.push('/admin')

            }
        })
        .catch(function (error) {
            console.log(error);
        });
    return (
        <>

            <div className="main">

                <Header2 />
                <div className="d-flex dc ">
                    <div className="lbar">
                        <ul className="list-group">
                            <li className="list-group-item">Enquiries</li>
                            <li className="list-group-item">Students</li>
                            <li className="list-group-item">Hiring</li>
                            <li className="list-group-item">new Registration</li>
                            <li className="list-group-item"></li>
                        </ul>

                    </div>
                    <div className="rc">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
            <style>
                {
                    `
.dc{
background:#e7faff;
height:90vh;
}
.lbar{
background:white;
padding:16px 12px;
width:344px;

}
.rc{
background:white;
padding:14px;
margin:14px;
width:100%;
border-radius:8px;

}            
`
                }
            </style>


        </>
    )



};


export default Index