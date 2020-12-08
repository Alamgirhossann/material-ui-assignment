import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=> setPost(data))
    }, [])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Here is the hundrad posts form my timeline for you</h1>
            {
                post.map(post => <Post 
                    key={post.id}
                    post ={post}></Post>)
            }
        </div>
    );
};

export default Home;