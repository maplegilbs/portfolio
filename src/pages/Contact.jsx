import './Contact.css';

export function Contact() {
    return (
        <main>
            <h1 className='main__heading'>Get In Touch</h1>
            <hr className='main__heading__horizontal-rule' />
            <h4>Leave a message here or drop an email to <a href='mailto:scott@sapmappers.com'>scott@sapmappers.com</a> </h4>
            <div className='contact-form-container'>
                <form className='contact-form' action='/' method='post'>
                    <label>Name: *<br/><input required name='name' type='text'></input></label>
                    <label>Email: *<br/><input required name='email' type='email'></input></label>
                    <label>Message: *<br/><textarea cols={300} rows={25} required name='email' type='email'></textarea></label>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </main>
    )
}