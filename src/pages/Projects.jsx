import { useEffect, useState } from 'react'
import '../index.css';
import './Projects.css';
import { projectDetails } from '../assets/projectDetails';
import { Project } from '../components/Project';

export function Projects() {
    const [isMobile, setIsMobile] = useState('');
    const [windowY, setWindowY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY)
            setWindowY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return (() => window.removeEventListener('scroll', handleScroll))
    }, [])
    

    //determine if user is in mobile mode - if so render one class, otherwise use another
    useEffect(() => {
        window.innerWidth >= 720 ? setIsMobile(false) : setIsMobile(true);
    }, [])

    const projectSections = projectDetails.map((project, index) => <Project key={project.name} isEven={index % 2 } project={project} isMobile={isMobile} windowY={windowY}/>)

    return (
        <main>
            <h1 className='main__heading'>Completed Projects {isMobile&& <br />}&{isMobile&& <br />} Works In Progress</h1>
            <hr className='main__heading__horizontal-rule'/>
            {projectSections}
        </main>
    )

}