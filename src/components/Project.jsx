import { useState } from "react"

export function Project({project, isMobile, isEven}) {
    const [isHovered, setIsHovered] = useState(false)
    let techStack = project.technologies.map(techItem => <li>{techItem}</li>)
   
    return (
        <section className={`project-section ${!isEven ? 'image-left' : 'image-right'}`}>

            <div className='project-title'>
                <h2>{project.name}</h2>
                <h3>{project.date}</h3>
                <hr />
                <p>{project.descriptionShort}</p>
                <br/>
            </div>

            <div  className={`${isHovered ? 'project-image project-image--hovered' : 'project-image'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <img src={`assets/${project.imgFileName}`} alt={project.imgAlt} />
                {project.mobileImgFileName && <img className ='mobile-image-prvw' src={`assets/${project.mobileImgFileName}`} />}
                <a target='_blank' href={project.url}>
                    <button className={`project-image__button ${isHovered ? 'project-image__button--hovered' : ''}`}>View Live Site</button>
                </a>
            </div>

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