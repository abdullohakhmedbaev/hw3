import './about.scss';
import aboutMan from '../../imgs/IMAGE(1).png';
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
    return (
        <div className='about'>
            <div className='about-author'>
                <button className='arrowBtn'>
                    <img src="" alt="" />
                    <IoIosArrowRoundForward size={112} fontWeight={400} />
                </button>
                <p className='meet'>Meet your host</p>
                <h2>Jacob Paulaner</h2>
                <p className='description'>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                <p className='description'>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
            </div>
            <div className='about-authorImg'>
                <img src={aboutMan} alt="" />
            </div>
        </div>
    );
}

export default About;
