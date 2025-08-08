function ProfilePic(){
    const Picture='./src/assets/ProfilePic.png';
    
    return(
        <div className="about-section">
            <div className="profile-pic">
                <img src={Picture} alt="Profile-Picture" />
            </div>
            <div className="descprition">
                <h1>Prasim Basnet</h1>
                <h4>I am a <span className="highlight">Web Developer</span></h4>
                <p>Motivated and all-round individual who enjoys learning and creating new 
                    things. Gaining different prospect in skills I work on is what I love and improve 
                    according to their review. In my free time, I love playing basketball, coding, and 
                    trying out new stuff. I love traveling, meeting new people, and gaining fresh views 
                    of life; all this helps to make me grow as an individual.
                </p>
                <a href="./public/cv.pdf" download={"Prasim_Basnet.pdf"}>
                    <button className="cv-button">Download CV</button>
                </a>
            </div>
        </div>
    );
}
export default ProfilePic