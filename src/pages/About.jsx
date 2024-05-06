//Styles
import '../index.css'
import './About.css';
//Images
import Profile from '../assets/profile.png';
import Reesie from '../assets/Reesie.jpg';
import ScottImage from '../assets/scottGilbertPortrait.jpg';
import ReactIcon from '../assets/icons/React.png'
import NextIcon from '../assets/icons/next-js.svg'
import NodeIcon from '../assets/icons/NodeJS.png'
import Bootstrap from '../assets/icons/Bootstrap.png'
import HTML from '../assets/icons/HTML.png'
import CSS from '../assets/icons/CSSLogo.png'
import Javascript from '../assets/icons/JS.png'
import Wordpress from '../assets/icons/Wordpress-Logo.svg'
import MySQL from '../assets/icons/Mysql_logo.png'
import Mongo from '../assets/icons/MongoLogo.png'
import Git from '../assets/icons/Git.svg'
import Sass from '../assets/icons/SassLogo.png'

export function About() {

    return (
        <main>
            <br />
            <section>
                <div className='about--summary'>
                    <img className='profile-image' src={ScottImage} />
                    <span className='first-letter'>Hi</span>, my name is Scott Gilbert.
                    <br /><br /><br />
                    I am a software developer leveraging the power of web based technologies to make life easier, more productive, and more fun.  
                    <br /><br /><br />
                    I love to problem solve and to collaborate.  I find simplicity and efficiency to be beautiful.  I love to learn and to teach. I think the energy of a team working towards a common goal is infectious.
                    <br /><br /><br />
                    Curious about collaborating? I'd love to meet you.  Why don't you <a href="/contact">reach out</a> and I'll get right back to you.  
                    <br /><br /><br />
                    I find my happy place with the following technologies (but am constantly falling in love with more).

                    <div className='tech-groups'>
                        <div className='tech-group'>
                            <img alt='Next.js Logo' src={NextIcon} />
                            <h6>Next.JS</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='React Logo' src={ReactIcon} />
                            <h6>React</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='Bootstrap Logo' src={Bootstrap} />
                            <h6>Bootstrap</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='Node.js Logo' src={NodeIcon} />
                            <h6>Node.JS</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='Wordpress Logo' src={Wordpress} />
                            <h6>Wordpress</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='MySQL Logo' src={MySQL} />
                            <h6>MySQL</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='Sass Logo' src={Sass} />
                            <h6>Sass</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='Mongo Logo' src={Mongo} />
                            <h6>Mongo</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='Git Logo' src={Git} />
                            <h6>Git / GitHub</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='HTML Logo' src={HTML} />
                            <h6>HTML 5</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='CSS Logo' src={CSS} />
                            <h6>CSS 3</h6>
                        </div>
                        <div className='tech-group'>
                            <img alt='Javascript Logo' src={Javascript} />
                            <h6>Vanilla JS</h6>
                        </div>
                    </div>
                </div>
                <br />
                <details>
                    <summary>Get the origin story...</summary>
                    <p className='about-paragraph'>
                        <br />In the early 2000s I organized an informal summer street hockey leauge (SBSHL) with a bunch of my highschool buddies.
                        We set up milk-crate nets on the town tennis courts, started a stop-watch timer and chewed through C batteries on our panisonic boombox.
                        There were teams and standings and stats and playoffs.
                        But what truly made this league official was it's website.  It had flash animation, bootlegged music and all sorts of early 2000's styling.  It was <em>very</em> cool.  Unfortunately for me, I was having too much fun to stop and consider
                        that the very thing I was doing for fun could be a career.  <br />
                    </p>
                    <p className='about-paragraph'>
                        Fast forward ~15 years; the company I am working for is having issues with mis-picked orders.  Specifically, when quantities of 2 or more are ordered, only one is ending up in the shipment.
                        I am tasked with finding a solution to this problem. A bit of digging finds me dusting off my HTML skills and researching CSS and Javascript to create custom pack lists where any quantities of greather than 1 get a bright yellow background.
                        The results for the company were immediate as mispacked shipments were dramatically reduced.
                    </p>
                    <p className='about-paragraph'>
                        It was this minor problem solving task, with such a simple and satisifying solution, that has lead to new career in the world of software engineering and web developemnt.
                    </p>
                    <p className='about-paragraph'>
                        My toolbox is utilitarian and constantly growing.  Of course it contains the basics, including HTML5, Vanilla Javascript, and modern CSS including preprocessers such as SASS.  On top of those are found more advanced javascript tools, such as the popular front-end React library to backend experience utilizing Node paired with Express and frameworks such as NextJS and a slew of libraries for tasks from database integration to encryption and authorization.  Database experience includes projects using both SQL and NoSQL varieties.  Of course no toolbox is complete without familiarity with Git version control and use of Github, and mine is no exception.
                    </p>
                    <p className='about-paragraph'>
                        I am very excited to put these skills to good use, and hope to see you in the commits.
                    </p>
                    <p className='about-paragraph'>
                        -Scott
                    </p>
                </details>
            </section>
        </main>
    )
}