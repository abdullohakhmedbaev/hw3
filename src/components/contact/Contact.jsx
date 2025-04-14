import { useState } from 'react';
import './contact.scss';
import axios from 'axios';

const Contact = () => {

    const [newComment, setNewComment] = useState({name: '', text: '', rating: ''});

    const createComment = (newCom) => {
        axios.post(`http://localhost:5000/comment`, newCom)
        .then()
        .catch((error) => {console.log(error)})
    }
    return (
        <div className='contact'>
            <div className='contact-description'>
                <p>Email Newsletter</p>
                <h2>Subscribe for updates</h2>
            </div>
            <form className='contact-form'>
                <input 
                    onChange={(e) => setNewComment({...newComment, name: e.target.value})} 
                    type="text" placeholder='Name' 
                />
                <input
                    onChange={(e) => setNewComment({...newComment, text: e.target.value})} 
                    type="text" placeholder='Text' />
                <input
                    onChange={(e) => setNewComment({...newComment, rating: e.target.value})} 
                    type="text" placeholder='Rating' />
                <button onClick={() => createComment(newComment)}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
