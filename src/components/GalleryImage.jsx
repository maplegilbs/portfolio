import './GalleryImage.css';
// import { Link } from 'react-router-dom';
export function GalleryImage ({source, altText}) {
    return (
        <a className="gallery-link" href={`../${source}`} target="_blank"> <img src={source} alt={altText} className="gallery-image"/> </a>
    )
}