import '../index.css'
import './About.css';
import ScottImage from '../assets/shoebox.jpg';

export function About() {

    return (
        <main>
            <h1 className='main__heading'>About Me</h1>
            <hr className='main__heading__horizontal-rule' />
            <section>
                <img className='profile-image' src={`${ScottImage}`} />
                <p className='about-paragraph'>
                    <span className='first-letter'>Hi</span>, my name is Scott Gilbert.  <br />
                    <br />In the early 2000s I organized an informal summer street hockey leauge (SBSHL) with a bunch of my highschool buddies.
                    We set up milk-crate nets on the town tennis courts, started a stop-watch timer and chewed through C batteries on our panisonic boombox.
                    There were teams and standings and stats and playoffs.
                    But what truly made this league official was it's website.  It had flash animation, bootlegged music and all sorts of early 2000's styling.  It was <em>very</em> cool.  Unfortunately for me, I was having too much fun to stop and consider
                    that the very thing I was doing for fun could be a career.  <br />
                </p>
                <p className='about-paragraph'>
                    Fast forward ~15 years; the company I am working for is having issues with mis-picked orders.  Specifically, when quantities of 2 or more are ordered, only one is ending up in the shipment.
                    I am tasked with finding a solution to this problem.  In talking to the workers who are doing the packing, they suggest somehow highlighting quantities of more than 1 on the pack list.  A bit of digging finds me dusting off my HTML skills and researching CSS to create custom pack lists where any quantities of greather than 1 get a bright yellow background.
                    Result for the company: dramatically reduced mispacked shipments.  Result for me: a sudden reignition of interest in web development.
                </p>
                <p className='about-paragraph'>
                    It was this minor problem solving task, with such a simple and satisifying solution, that has lead to now a several year journey pursuing a career shift into the world of web-development.  I have discovered A LOT has changed since I wrote my first html tag back in the early 2000s.  Tripod and Geocites aren't quite the powerhouse page builders they once were.  Adobe Flash has been obsolete for many years (thanks Apple and HTML5).  But oh boy are the changes exciting.
                    With so much to explore my thirst for learning will be perpetually quenched and that is VERY exciting to me.  
                </p>
                <p className='about-paragraph'>
                    While the starting line for this path may be fading in the distance behind me, the current moment is a new starting point in its own right, as I ready to take the next step into a professional role.  This is scary, but it is exciting, as such a venture is when one sets out knowing they are prepared and capable.  My toolbox may not yet be vast, but it is utilitarian and it is constantly growing.  Of course it contains the basics, including HTML5, Vanilla Javascript, and modern CSS including preprocessers such as SASS.  On top of those are found more advanced javascript tools, such as the popular front-end React library to backend experience utilizing Node paired with Express and frameworks such as NextJS and a slew of libraries for tasks from database integration to encryption and authorization.  Database experience includes projects using both SQL and NoSQL varieties.  Of course no toolbox is complete without familiarity with Git version control and use of Github, and mine is no exception.  
                </p>
                <p className='about-paragraph'>
                    I am very excited to put these skills to good use, and hope to see you in the commits.
                </p>
                <p className='about-paragraph'>
                    -Scott
                </p>
            </section>
        </main>
    )
}