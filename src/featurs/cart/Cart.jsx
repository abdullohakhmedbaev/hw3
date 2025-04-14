import './cart.scss';

export const Cart = ({ image, catalog, episode, title, description }) => {
    return (
        <div className='cart-container'>
            <div className='cart-container-img'>
                <img src={image} alt="" />
            </div>  
            <div className='cart-container-description'>
                <p className='category'>{catalog}</p>
                <p className='episode'>{episode}</p>
                <h2 className='title'>{title}</h2>

                <p className='description'>{description}</p>

                <button>View Episode Details</button>
            </div>
        </div>
    );
}