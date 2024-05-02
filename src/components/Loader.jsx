//Styles
import '../index.css'
import './Loader.css';

export default function Loader({loader_text}) {
    return (
        <>
            <div className="loader">
                <div className="loading_text">{loader_text}</div>
                <div className="loading_spinner"></div>
            </div>
        </>
    )
}