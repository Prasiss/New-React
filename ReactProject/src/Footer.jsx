
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiGithub,SiInstagram,SiGmail,SiLinkedin } from 'react-icons/si';

function Footer(){
      
    return (
        <div className="footer">
            <div className="logo">
                <a href="https://www.linkedin.com/in/prasimbasnet096/" target="_blank" >
                    <SiLinkedin className="linkedin-icon" />
                </a>
                <a href ="https://www.github.com/Prasiss"  target="_blank">
                <SiGithub className="github-icon" />
                </a>
                <a href ="https://mail.google.com/mail" target="_blank"> <SiGmail className="gmail-icon" />
                </a>
                <a href ="https://www.instagram.com/assassin_e96/"  target="_blank"><SiInstagram className="instagram-icon" />
                </a>
            </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} <span>Prasim Basnet</span></p>
            </footer>
        </div>
        
    );
}
export default Footer
