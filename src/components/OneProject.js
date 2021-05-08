import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AuditPic from '../Assets/ProjectPic/Audit.jpg';
import * as Actions from '../Store/actions';
import reducer from '../Store/reducers';
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    height: "90%",
    '&:hover':{
        boxShadow : "20px 20px 20px rgb(153, 153, 102)",
        height: "95%",
    }
  },
  media: {
    height: 140,
  },
});

function OneProject(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.project.Photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.project.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.project.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" onClick={ev=>dispatch(Actions.OpenDialog(props.project))}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default OneProject