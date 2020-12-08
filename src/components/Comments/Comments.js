import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comments = () => {
    const [comment, setComment] = useState([])
    console.log(comment);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComment(data))
    })
    return (
        <div>
            {
                comment.map(comment => <CommentDetail 
                    key ={comment.id}
                    comment={comment}></CommentDetail>)
            }

        </div>
    );
};

export default Comments;