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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia exercitationem quisquam blanditiis illo officiis sed dolores praesentium voluptatibus. Obcaecati quia eum quibusdam et porro itaque adipisci recusandae pariatur sequi.
                </p>
                <a href="./public/cv.pdf" download={"Prasim_Basnet.pdf"}>
                    <button className="cv-button">Download CV</button>
                </a>
            </div>
        </div>
    );
}
export default ProfilePic