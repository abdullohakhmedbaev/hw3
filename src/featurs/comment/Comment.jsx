import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import './comment.scss';

export const Comment = ({ id, rating, text, name, deleteComment, patchComment, changeId, setChangeId, setChange }) => {
    const [editData, setEditData] = useState({
        name: name,
        text: text,
        rating: rating
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: name === 'rating' ? parseInt(value) : value
        }));
        setChange({
            name: editData.name,
            text: editData.text,
            rating: editData.rating
        });
    };

    const handleSave = () => {
        patchComment(id, editData);
        setChangeId(null);
    };

    return (
        <div className="comment">
            {changeId === id ? (
                <div className="edit-form">
                    <input 
                        type="text" 
                        name="name"
                        value={editData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                    <input 
                        type="text" 
                        name="text"
                        value={editData.text}
                        onChange={handleInputChange}
                        placeholder="Comment"
                    />
                    <input 
                        type="number" 
                        name="rating"
                        value={editData.rating}
                        onChange={handleInputChange}
                        placeholder="Rating"
                        min="0"
                        max="5"
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setChangeId(null)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <Rating
                        initialValue={rating}
                        readonly={true}
                        allowFraction={true}
                        emptyColor="transparent"
                        size={20}
                    />
                    <h2>{text}</h2>
                    <p>{name}</p>
                    <button onClick={() => deleteComment(id)}>Delete</button>
                    <button 
                        style={{ margin: '0 20px' }} 
                        onClick={() => {
                            setChangeId(id);
                            setEditData({ name, text, rating });
                        }}
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};