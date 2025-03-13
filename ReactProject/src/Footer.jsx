function Footer(){
    const linkedin='./src/assets/linkedin.png';
    const github='./src/assets/github.png';
    const gmail='./src/assets/gmail.jpg';
    const insta='./src/assets/insta.png';

    
    return (
        <div className="footer">
            <div className="logo">
                <img src={linkedin}></img>
                <img src={github}></img>
                <img src={gmail}></img>
                <img src={insta}></img>
            </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} <span>Prasim Basnet</span></p>
            </footer>
        </div>
        
    );
}
export default Footer