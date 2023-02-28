import { Link } from "react-router-dom"
import InstaImage from "../Images/icon.svg"
import camera from "../Images/camera@2x.png"
import dot from "../Images/dot.svg"
import "../styles/post_view.css"
import img from "../Images/My_Photo.jpg"
import heart from "../Images/heart.png"
import share from "../Images/share.png"
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Image from "./Image"

function PostView() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/post")
        .then((response) => {
          setInfo(response.data.data);
        });   
    }, [])
    console.log(info)
    return (<div>
        <div className="header">
            <div className="icon">
                <img src={InstaImage}></img>
                <p id="name">Instaclone</p>
            </div>
            <Link to="/create"><img className="cam_icon" src={camera}></img></Link>
        </div>
        <div className="main_box">
                {info.map((data, index) => {
                    return (
                        <div key={index} className="inside">
                        <div>
                    <div className="name">
                    <div>
                    <p> <b>{data.author} </b></p>
                    <p className="location">{data.location}</p>
                    </div>
                    <div>
                        <img  src={dot}></img>
                    </div>
                    </div>
                <Image sendIndex={index}/>
                
                <div className="footer">
                    <div>
                    <img src={heart} width="30px"></img>
                    <img src={share} width="30px"></img>
                    </div>
                    <p>25 February 2023</p>
                </div>
                <div id="likes">
                    <p>87 likes</p>
                </div>
                <p id="discription"> <b>{data.description}</b></p>
                </div>
                </div>

                )                })}

        
        </div>
    </div>)
}

export default PostView
