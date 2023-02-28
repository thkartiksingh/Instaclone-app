import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Image = ({sendIndex}) => {

    const [imgdata, setData] = useState([])
    const [postIndex, setPostIndex] = useState(Number)

    useEffect(() => {
        axios.get("http://localhost:5000/image")
        .then((response) => {
        
          setData(response.data);
        });     
    }, [])

    return (
    <div>{ imgdata.map((singleData, index) => {
        const base64String = btoa( 
            String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
        );
        return (<div key={index} >
            {sendIndex === index ? <>
                <img src={`data:image/png;base64,${base64String}`} width="300px" height="300px"></img>

            </>: ""}
            
        </div>)

    })}</div>
  )
}

export default Image