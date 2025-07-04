function ContactMe(){
    return(
        <div className="contact-container">
            <form className="Contact-Me">
                <div>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" placeholder="Enter your first name"/>
                </div>
                <div>
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" placeholder="Enter your Last name"/>
                </div>
                <div>
                    <label htmlFor="query">Any Queries</label>
                    <input type="text" id="query" name="query" placeholder="Enter your Query "/>
                </div>
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}
export default ContactMe;