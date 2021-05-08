import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import VerticalLinearStepper from './VerticalLinearStepper';
import * as Actions from '../Store/actions';
import { useDispatch, useSelector } from 'react-redux';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  // const [open, setOpen] = React.useState(props.open);
  const open = useSelector((state)=>state.protfolioReducer.opendialog);
  const projectData = useSelector((state)=>state.protfolioReducer.ProjectDetail);
  const dispatch = useDispatch();
  

  const handleClose = () => {
    dispatch(Actions.CloseDialog());
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        // maxWidth="xl"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Details
        </DialogTitle>
        <DialogContent>
        <VerticalLinearStepper/>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}