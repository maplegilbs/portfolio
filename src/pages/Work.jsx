import '../index.css';
import './Work.css';
import { Document, Page } from 'react-pdf';
import { useState, useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { NavLink } from 'react-router-dom';
import Loader from '../components/Loader.jsx'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export function Work() {
    const [pageStatus, setPageStatus] = useState('locked'); //locked, loading, unlocked, error
    const [token, setToken] = useState(null)
    const [isPDFVisible, setIsPDFVisible] = useState(true);
    const [resumeFile, setResumeFile] = useState(null);
    const [passcode, setPasscode] = useState('');


    //on first render check if there is a token set in session storage, if there is set it in state, and set page status to unlocked
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            let sessionToken = sessionStorage.getItem('token')
            setToken(sessionToken)
            setPageStatus('unlocked');
        }
    }, [])


    useEffect(() => {
        async function getResume() {
            try {
                let response = await fetch(`${process.env.REACT_APP_SERVER}/portfolio/resume`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    let data = await response.blob();
                    console.log(data)
                    setResumeFile(data);
                }
            } catch (error) {
                console.error(`Error fetching resume file: ${error}`)
            }
        }
        if (!resumeFile && pageStatus !== 'locked' && pageStatus !== 'error') {
            getResume();
        }
    }, [pageStatus])

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/portfolio/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password: passcode })
            })
            //if login is success unlock the page, set a token in sessionStorage
            if (response.status === 200) {
                let data = await response.json();
                sessionStorage.setItem('token', data.body)
                setToken(data.body)
                setPageStatus('loading')
                setTimeout(() => setPageStatus('unlocked'), 2000)
            }
            else {
                setPageStatus('error')
            }
        } catch (error) {
            setPageStatus('error')
            console.error(`Error logging in: ${error}`)
        }
    }


    return (
        <main>
            <h1 className='main__heading'>Work History</h1>
            <hr className='main__heading__horizontal-rule' />
            <br />
            {(pageStatus === 'locked' || pageStatus === 'error') &&
                <div className='access-overlay'>
                    <p>To view work history and a resume please enter the password provided to you when linked to this page.</p>
                    <div className='inputs-div'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='passcode'>Enter Passcode Provided</label>
                            <input type="text" id="passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
                            <button type="submit">Enter</button>
                            {pageStatus === 'error' && <div className='error-notice'>Passcode Incorrect</div>}
                        </form>
                    </div>
                    <p>  If you were not provided a passcode <NavLink to="/contact">contact me</NavLink> and I will be happy to provide you with my resume, references or other desired information.</p>

                </div>
            }
            {pageStatus === 'loading' &&
                <Loader loader_text={'Loading work history...'} />
            }
            {pageStatus === 'unlocked' &&
                <>
                    {resumeFile &&
                        <div className='buttons-container'>
                            <a><button onClick={() => setIsPDFVisible(prev => !prev)}> {isPDFVisible ? "Hide Resume" : `Resume Preview`}</button></a>
                            <a target="_blank" download={'ScottGilbertResume.pdf'} href={URL.createObjectURL(resumeFile)}><button >Resume Download</button></a>
                        </div>
                    }
                    <div>
                        {
                            (isPDFVisible && resumeFile) &&
                            <Document className="pdf-preview" file={resumeFile} loading="...Loading...">
                                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={window.innerWidth < 700 ? 300 : ''}>
                                </Page>
                            </Document>
                        }
                    </div>

                    <br />

                    <div className='recommendations-section'>
                        <h2>Kind Words</h2>
                        <br />
                        <blockquote>"I could wax poetic and lyrical about Scott for pages, but I’ll sum it up with letting you know that Scott is hands down the single best employee we’ve ever had.  He’s a great guy, incredibly even tempered, and flat out useful in just about any area.  For us, his focus was on job costing, operations, new systems deployment, inventory, fulfillment, IT, and MUCH more."<br /> <span className='quote-source'>- Eric Sorkin, CEO / Owner, Runamok Maple</span></blockquote>
                        <br />
                        <blockquote>"No matter what type of unusual work we gave you, you found a way to get it done with quality and excellence that I admire. You easily fit into our company both personally and professionally. I believe you have accomplished a lot in a short period of time, made significant contributions, built strong relationships, and handled yourself in a way that made it easy for people at all levels of the company to work with you."<br /> <span className='quote-source'>- Ed Townley, CFO, Cabot Cheese</span></blockquote>
                    </div>
                </>
            }

        </main >
    );

}