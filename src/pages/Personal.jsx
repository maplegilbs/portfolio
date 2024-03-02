import './Personal.css';
import { imagesList } from '../assets/personalGalleryImages';
import { GalleryImage } from '../components/GalleryImage';

export function Personal() {

    const galleryImages = imagesList.map(imageInfo => {
        return <GalleryImage key={imageInfo.fileName} source={`personalPageImages/${imageInfo.fileName}`} alt={`${imageInfo.alt}`} />
    })

    return (
        <main>
            <h1 className='main__heading'>Personal Pursuits</h1>
            <hr className='main__heading__horizontal-rule' />
            <h3 className='personal-page__heading--secondary'> A picture === a thousand words.</h3>
            <br/>
            <div className='gallery-container'>
                {galleryImages}
            </div>
        </main>
    )
}