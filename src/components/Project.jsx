import { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export function Project({ project, isMobile, isEven, windowY }) {
    const [isInFullView, setIsInFullView] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true)
    const imageRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false)
    let techStack = project.technologies.map((techItem, index) => <li key={index}>{techItem}</li>)

    useEffect(() => {
        if (imageRef) {
            let imageLoc = imageRef.current.getBoundingClientRect();
            (imageLoc.top > 0 && imageLoc.bottom < window.innerHeight) ? setIsInFullView(true) : setIsInFullView(false)
        }
    }, [windowY])

    return (
        <section className={`project-section ${!isEven ? 'image-left' : 'image-right'}`}>

            <div className='project-title'>
                <h2>{project.name}</h2>
                <h3>{project.date}</h3>
                <hr />
                <p>{project.descriptionShort}</p>
                <br />
            </div>

            <div ref={imageRef} className={`${(isHovered || isInFullView) ? 'project-image project-image--hovered' : 'project-image'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <img src={`assets/${project.imgFileName}`} alt={project.imgAlt} />
                {project.mobileImgFileName && <img className='mobile-image-prvw' src={`assets/${project.mobileImgFileName}`} />}
                <a target='_blank' href={project.url}>
                    <button className={`project-image__button ${(isHovered || isInFullView) ? 'project-image__button--hovered' : ''}`}>View Live Site</button>
                </a>
            </div>

            {project.name.toLowerCase() == "bear cobble hq" &&
                <div className={`video-popup ${isModalVisible ? 'modal-visible' : 'modal-hidden'}`}>
                    <div className="close-button" onClick={() => setIsModalVisible(false)}>
                        <FontAwesomeIcon icon={faXmarkCircle} size="xl"/>
                    </div>
                    <video controls crossOrigin="anonymous">
                        <source src="https://sg-web-dev-portfolio.s3.amazonaws.com/BCSW+App+Walkthrough+720p.mp4" type="video/mp4" />
                        <track
                            label="English"
                            kind="subtitles"
                            srcLang="en"
                            src="https://sg-web-dev-portfolio.s3.amazonaws.com/BCSW+App+Walkthrough+Captions.vtt"
                            default />
                    </video>
                </div>
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