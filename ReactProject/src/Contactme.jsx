function ContactMe(){
    return(
        <div className="contact-container">
            <form className="Contact-Me">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/>
            </form>
        </div>
        
    );
}
export default ContactMe;