import './GalleryImage.css';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
export function GalleryImage({ placeholderSource, source, altText }) {
    const [imageSource, setImageSource] = useState(null)
    useEffect(() => {
        let img = new Image();
        img.src = source;
        img.onload = () => setImageSource(source)
    }, [])

    return (
        <a className="gallery-link" href={`../${source}`} target="_blank">
            <img src={imageSource || placeholderSource} alt={altText} className="gallery-image" />
        </a>
    )
}