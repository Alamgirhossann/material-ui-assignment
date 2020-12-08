import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllComments from '../allComments/AllComments'

const CommentDetail = () => {

    const { commentId } = useParams();
    const [commentDetail, setCommentDetail] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
            .then(res => res.json())
            .then(data => {
                setCommentDetail(data)
            })
    }, [])
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Here is the comments from the following users</h1>
            {
                commentDetail.map(AllComnt => <AllComments 
                    key={AllComnt.id}
                    AllComments={AllComnt}></AllComments>)
            }
        </div>
    );
};

export default CommentDetail;