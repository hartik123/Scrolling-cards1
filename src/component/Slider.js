import React from 'react'
import {useState,useEffect} from 'react';
import './Slider.css';


const Slider = () => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
        .then(res => res.json())
        .then(data=> {setImages(data)})
        .catch(err=> console.log(err))
    },[])
    return (
        <div className="main_div">
            
            <div className="center_div">
            {
                images.map((imageUrl)=>{
                    console.log(imageUrl)
                    return <img key={imageUrl.id} src={`https://picsum.photos/200/300?random=${imageUrl.id}`} />
                })
            }
            </div>
        </div>
    )
}

export default Slider;
