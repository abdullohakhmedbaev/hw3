import './header.scss';

const Header = () => {
    return (
        <header className="home__header">
            <h2>Castaway</h2>
            <nav className='links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#episode">Episodes</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#footer">Contact</a></li>
            </nav>
        </header>
    );
}

export default Header;
