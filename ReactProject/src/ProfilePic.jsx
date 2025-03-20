function ProfilePic(){
    const Picture='./src/assets/ProfilePic.png';
    return(
        <div className="about-section">
            <div className="profile-pic">
                <img src={Picture} alt="Profile-Picture" />
            </div>
            <div className="descprition">
                <h1>Prasim Basnet</h1>
                <h4>Learning Basics</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia exercitationem quisquam blanditiis illo officiis sed dolores praesentium voluptatibus. Obcaecati quia eum quibusdam et porro itaque adipisci recusandae pariatur sequi.

            </div>
        </div>
    );
}
export default ProfilePic