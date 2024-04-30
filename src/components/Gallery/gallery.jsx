import { useState } from 'react';
import './gallery.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export function Gallerypage() {
    const [pics, setPics] = useState([]);

    function uploadImages(e) {
        const files = Array.from(e.target.files);
        const uploadedImages = files.map(file => URL.createObjectURL(file));
        setPics(prevPics => [...prevPics, ...uploadedImages]);
        
    }

    function saveImages() {
        // const formData = new FormData();
        // pics.forEach((pic, index) => {
        //     formData.append(`image${index}`, pic);
        // });
        const formData = [];
        pics.map(pic=>{
            formData.push(pic)
        })
        console.log(formData)
        // Make a POST request to your server to save the images
        axios.post('http://127.0.0.1:7000/Addto-Gallery', formData)
            .then(response => {
                alert('Photos are updated to server')
            })
            .catch(error => {
                alert('server side Problem')
            });
    }

    return (
        <div className="gallerybody">
            <h2>School Gallery</h2>
            <div className='input-group'>
                <input type="file" accept='image/*' onChange={uploadImages} multiple className='form-control' />
                <button className='btn btn-info' onClick={saveImages}>Add Images</button>
            </div>
            <div>
                {pics.map((pic, index) => (
                    <img src={pic} key={index} width='100%' alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

