import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const PostDetail = () => {
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, {});
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Card className={classes.root} style={{marginTop:'20px'}}>
                <h1 style={{marginLeft:'10px'}}>Here is detail about the post!!!</h1>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Title: {postDetail.title}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                            <strong>Description:</strong> {postDetail.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/comments/${postId}`}>
                        <Button size="small" color="secondary">
                            See Comments
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    );
};

export default PostDetail;