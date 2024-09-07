import './GalleryImage.css';
import { useState, useEffect } from 'react';
export function GalleryImage({ placeholderSource, source, altText }) {
    const [imageSource, setImageSource] = useState(null)
    console.log(imageSource)
    useEffect(() => {
        let img = new Image();
        img.src = source;
        img.onload = () => {
            setImageSource(source)
        }
    }, [source])

    return (
        <a className="gallery-link" href={`../${source}`} target="_blank">
            <img src={imageSource? imageSource : placeholderSource} alt={altText} className="gallery-image" />
        </a>
    )
}