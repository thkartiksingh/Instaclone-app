import { Link } from "react-router-dom"
import InstaImage from "../Images/icon.svg"
import camera from "../Images/camera@2x.png"
import "../styles/form-update.css"
import React, { useState, useEffect } from "react";
import axios from 'axios';

function FormUpdate(){

    const [file, setFile] = useState(null);
    const [imageName, setImageName] = useState("");
    const [postInfo, setPostInfo] = useState({});
    const [state, setState] = useState(false)
    
    const hiddenFileInput = React.useRef(null);
  
    useEffect(() => {
      if(postInfo.author !== '' && postInfo.description !== '' && postInfo.location !== ''){
        setState(true)
    } if(!postInfo.author || !postInfo.description || !postInfo.location) {
        setState(false)
    }
    console.log(state)

    }, [postInfo])
    
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      setFile(fileUploaded)
      setImageName(fileUploaded.name)
    };

    const handleData = async() => {
        if(imageName === ""){
            alert("Upload Image")
        } 
        if(state) {
        const data = await axios.post("http://localhost:5000/post", postInfo)
        .then((response) => {
          return (response.data);
        })
        
        const formData = new FormData();
        formData.append('postImg', file);
 
        axios.post("http://localhost:5000/upload", formData)
    
}  
if(!postInfo.author || !postInfo.description || !postInfo.location ){
    alert("Enter All Information")
} }



    return <div>
        <div className="header">
            <div className="icon">
                <img src={InstaImage}></img>
                <Link style={{ textDecoration: 'none' }} to='/posts'><p  id="name">Instaclone</p></Link>
            </div>
            <img className="cam_icon" src={camera}></img>
        </div>
        <div className="main_form" >
                <div className='frist'> 
                <input type="text" placeholder="NO File chosen" name="postImg" value={imageName} required></input>
                <button onClick={handleClick}>
                    browse
                </button>
                <input type="file"
                name="postImg"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display:'none'}} 
                        required
                /> 
            </div>
            <div className='second'>
                <input type="text" placeholder="Author" onChange={(e) => setPostInfo({...postInfo, author: e.target.value})} required></input>
                <input className='locate' type="text" placeholder="Location" onChange={(e) => setPostInfo({...postInfo, location: e.target.value})} required></input>
            </div>
            <div className='third' >
                <input type="text" placeholder="Description" onChange={(e) => setPostInfo({...postInfo, description: e.target.value})}required></input>
            </div>
            {state ? <>
                <Link to="/posts"><button onClick={handleData} type="submit" className='post_button'>Post!</button></Link>

            </>: <>
            <button onClick={handleData} type="submit" className='post_button'>Post</button>
</>}
        </div>
    </div>
}

export default FormUpdate