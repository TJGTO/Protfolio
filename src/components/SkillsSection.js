import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import {Skills} from '../Assets/SkillsData';
import { CompareArrowsOutlined } from '@material-ui/icons';
import Reactlogo from '../Assets/React.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    color: "primary",
    '&:hover':{
      backgroundColor:"#c5e3f6"
    }
  },
}));

export default function SmallChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      {Skills.map((data)=>(
        
           <Chip
           
           avatar={<Avatar src={data.icon}></Avatar>}
           label={data.Name}
           variant="outlined"
           className={classes.chip}

         />
      ))}
      
    </div>
  );
}