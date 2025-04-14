import './footer.scss';
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import social from '../../imgs/social2.png';

const Footer = () => {
    return (
        <footer className='footer-cont'>
            <div className='footer-cont-icon'>
                <h2>Castaway</h2>
                <div className='social'>
                    <FaInstagram size={24} />
                    <FiTwitter size={24} />
                    <SlSocialFacebook size={24} />
                </div>
            </div>
            <div className='footer-cont-links'>
                <div>
                    <p>Home</p>
                    <p>About</p>
                    <p>Episodes</p>
                    <p>Contact</p>
                </div>
                <div>
                    <p>Style Guide</p>
                    <p>Instructions</p>
                    <p>Changelog</p>
                    <p>Credit</p>
                    <p>Powered by Webflow</p>
                    <p>Licenses</p>
                </div>
                <div>
                    <img src={social} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

