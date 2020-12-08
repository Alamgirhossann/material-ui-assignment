
import React from 'react';
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
const cardStyle = {

  margin: '15px',
  padding: '10px'
}

const Post = (props) => {
  const { title, id } = props.post;
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Card className={classes.root} style={cardStyle}>
        <CardActionArea>
         <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/post/${id}`}>
            <Button size="small" color="secondary">
              See Detail {id}
            </Button></Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Post;