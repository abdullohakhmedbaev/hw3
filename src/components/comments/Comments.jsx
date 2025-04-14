import { useEffect, useState } from 'react';
import { Comment } from '../../featurs';
import axios from 'axios';
import './comments.scss';

const Comments = () => {
    const [com, setCom] = useState([]);
    const [changeId, setChangeId] = useState(null);
    const [change, setChange] = useState({
        name: '',
        text: '',
        rating: 1,
        image: ''
    });

    const fetchComment = async () => {
        axios.get('http://localhost:5000/comment')
            .then(({ data }) => {
                setCom(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteComment = async (id) => {
        axios.delete(`http://localhost:5000/comment/${id}`)
            .then(() => {
                fetchComment();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const patchComment = async (id, updatedData) => {
        axios.patch(`http://localhost:5000/comment/${id}`, updatedData)
            .then(() => {
                fetchComment();
                setChangeId(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchComment();
    }, []);

    return (
        <div className='comments'>
            {com?.map(comment => (
                <Comment 
                    key={comment.id}
                    id={comment.id}
                    rating={comment.rating}
                    text={comment.text}
                    name={comment.name}
                    deleteComment={deleteComment}
                    patchComment={patchComment}
                    setChangeId={setChangeId}
                    setChange={setChange}
                    changeId={changeId}
                />
            ))}
        </div>
    );
};

export default Comments;