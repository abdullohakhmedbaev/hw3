import { Cart } from '../../featurs';
import './episode.scss';
import fram1 from '../../imgs/cart/Frame(1).png';
import fram2 from '../../imgs/cart/Frame(2).png';
import fram3 from '../../imgs/cart/Frame(3).png';

const Episodes = () => {

    const carts = [
        {
            img: fram1,
            catolog: 'Gear',
            episode: 'episode 3',
            title: 'Should you get outboard audio gear?',
            description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.'
        },
        {
            img: fram2,
            catolog: 'Gear',
            episode: 'episode 2',
            title: 'Mic tricks to take you to the next level',
            description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.'
        },
        {
            img: fram3,
            catolog: 'Gear',
            episode: 'episode 1',
            title: 'The best microphone under $200',
            description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.'
        }
    ]
    return (
        <div className='episodes'>
            <div className='episodes-title'>
                <h2>Latest episodes</h2>
                <button>View all episodes</button>
            </div>
            {
                carts && 
                carts.map((cart, indx) => (
                    <Cart 
                        key={indx}
                        image={cart.img} 
                        catalog={cart.catolog} 
                        episode={cart.episode}
                        title={cart.title}
                        description={cart.description}
                    />
                ))
            }
        </div>
    );
}

export default Episodes;
