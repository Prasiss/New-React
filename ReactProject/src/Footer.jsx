
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

function Footer(){
    
    
    return (
        <div className="footer">
            <div className="logo">
                <a href="https://www.linkedin.com/in/prasimbasnet096/" target="_blank" >
                    <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                </a>
                <a href ="https://www.github.com/Prasiss">
                <FontAwesomeIcon icon={faGithub} className="icon"/>
                </a>
                <a href ="https://mail.google.com/mail"> <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
                <a href ="https://www.instagram.com/assassin_e96/"><FontAwesomeIcon icon={faInstagram} className="icon"/>
                </a>
            </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} <span>Prasim Basnet</span></p>
            </footer>
        </div>
        
    );
}
export default Footer
