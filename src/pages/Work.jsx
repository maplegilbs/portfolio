import '../index.css';
import './Work.css';
import { Document, Page, Thumbnail } from 'react-pdf';
import { useState, useEffect } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export function Work() {
    const [isPDFVisible, setIsPDFVisible] = useState(true);


    return (
        <main>
            <h1 className='main__heading'>Work History</h1>
            <hr className='main__heading__horizontal-rule' />
            <br />
            <div className='buttons-container'>
                <a><button onClick={()=>setIsPDFVisible(prev=>!prev)}> {isPDFVisible? "Hide Resume":`Resume Preview`}</button></a>
                <a target="_blank" href="src/assets/ScottGilbert-Resume-2023_06_20.pdf"><button >Resume Download</button></a>
            </div>
            <div>
                {
                    isPDFVisible &&
                    <Document className="pdf-preview" file="src/assets/ScottGilbert-Resume-2023_06_20.pdf" loading="...Loading...">
                        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={window.innerWidth < 700? '300': ''}>
                        </Page>
                    </Document>
                }
            </div>
            
            <br/>

            <div className='recommendations-section'>
                <h2>Kind Words</h2>
                <br/>
                <blockquote>"I could wax poetic and lyrical about Scott for pages, but I’ll sum it up with letting you know that Scott is hands down the single best employee we’ve ever had.  He’s a great guy, incredibly even tempered, and flat out useful in just about any area.  For us, his focus was on job costing, operations, new systems deployment, inventory, fulfillment, IT, and MUCH more."<br /> <span className='quote-source'>- Eric Sorkin, CEO / Owner, Runamok Maple</span></blockquote>
                <br />
                <blockquote>"You came into Cabot as a wild card for us and because your background didn’t exactly fit the position but  through your own initiative and extra time you quickly learned your job.  No matter what type of unusual work we gave you, you found a way to get it done with quality and excellence that I admire. You easily fit into our company both personally and professionally. I believe you have accomplished a lot in a short period of time, made significant contributions, built strong relationships, and handled yourself in a way that made it easy for people at all levels of the company to work with you. For those reasons you will be missed by all of us."<br /> <span className='quote-source'>- Ed Townley, CFO, Cabot Cheese</span></blockquote>
            </div>
        </main>
    );

}