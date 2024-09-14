import { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function VideoModal({ selectedVideo, setSelectedVideo }) {
    return (
        <>
            <div className="close-button" onClick={() => setSelectedVideo(null)}>
                <FontAwesomeIcon icon={faXmarkCircle} size="xl" />
            </div>
            <video controls crossOrigin="anonymous">
                <source src={selectedVideo.src} type="video/mp4" />
                <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src={selectedVideo.captionSrc}
                    default />
            </video>
        </>
    )
}

export function Project({ project, isMobile, isEven, windowY }) {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const imageRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false)
    let techStack = project.technologies.map((techItem, index) => <li key={index}>{techItem}</li>)

    return (
        <section className={`project-section ${!isEven ? 'image-left' : 'image-right'}`}>

            <div className='project-title'>
                <h2>{project.name}</h2>
                <h3>{project.date}</h3>
                <hr />
                <p>{project.descriptionShort}</p>
                <br />
            </div>

            <div ref={imageRef} className='project-image'>
                <img src={`assets/${project.imgFileName}`} alt={project.imgAlt} />
                {project.mobileImgFileName && <img className='mobile-image-prvw' src={`assets/${project.mobileImgFileName}`} />}
                <a target='_blank' href={project.url}>
                    <button className='project-image__button'>View Live Site</button>
                </a>
            </div>

            {project.videos.length > 0 &&
                <div className='videos__container'>
                    <h4>Video Walkthroughs</h4>
                    <div className='video-links__container'>
                        {project.videos.map(video => {
                            return (
                                <div className="video-link__container" onClick={() => setSelectedVideo(video)}>
                                    <div className="thumbnail__container">
                                        <div className="play-icon__container">
                                            <FontAwesomeIcon className="play-icon" icon={faCirclePlay} size="2xl" />
                                        </div>
                                        <img src={video.thumbnail} />
                                    </div>
                                    <p>{video.name}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            }
            {selectedVideo &&
                <div className={`video-popup ${selectedVideo ? 'modal-visible' : 'modal-hidden'}`}>
                    <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
                </div >

            }

            <div className="project-details">
                <h4> Technologies Used </h4>
                <ul>
                    {techStack}
                </ul>
            </div>

            <div className='project-description'>
                <p>{project.descriptionLong}</p>
            </div>

        </section>
    )
}