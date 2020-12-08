import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

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

const AllComments = (props) => {
    const { name, email, body } = props.AllComments;
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Card className={classes.root} style={cardStyle}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            Name: {name}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                            <strong>Email:</strong> {email}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                            <strong>Description:</strong> {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
};

export default AllComments;