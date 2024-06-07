import { useState, useRef, useEffect } from 'react';
import './gallery.css';
import axios from 'axios';

export function Gallerypage() {
    const [pics, setPics] = useState([]);
    const fileInputRef = useRef(null);

    // Fetch existing gallery images on component mount
    useEffect(() => {
        axios.get('http://127.0.0.1:7000/GetGalleryImages')
            .then(response => {
                console.log('Received Image Paths:', response.data); // Log received image paths
                const imagePaths = response.data.map(image => {
                    console.log(`http://127.0.0.1:7000${image}`,"hello")
                    return `http://127.0.0.1:7000${image}`; // Prepend backend URL to image paths
                });
                setPics(imagePaths);
            })
            .catch(error => {
                console.error('Error fetching gallery images:', error);
            });
    }, []); 
    

    function uploadImages(e) {
        const files = Array.from(e.target.files);
        const uploadedImages = files.map(file => URL.createObjectURL(file));
        setPics(prevPics => [...prevPics, ...uploadedImages]);
    }

    async function saveImages() {
        const formData = new FormData();
        const files = Array.from(fileInputRef.current.files);

        files.forEach(file => {
            formData.append('galleryImage', file);
        });

        try {
            await axios.post('http://127.0.0.1:7000/Addto-Gallery', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Photos are updated to server');
        } catch (error) {
            console.error('Error:', error);
            alert('Server-side problem');
        }
    }

    function handleButtonClick() {
        fileInputRef.current.click();
    }

    return (
        <div className="gallerybody">
            <h2>School Gallery</h2>
            <div className='input-group'>
                <input
                    type="file"
                    accept='image/*'
                    onChange={uploadImages}
                    multiple
                    className='form-control'
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
                <button className='btn btn-info' onClick={handleButtonClick}>Add Images</button>
                <button onClick={saveImages} className='btn btn-warning'>Save Images</button>
            </div>
            <div className="gallery">
                {pics.map((pic, index) => (
                    <img src={pic} key={index} alt={`Image ${index + 1}`} className="gallery-image" />
                ))}
            </div>
        </div>
    );
}
