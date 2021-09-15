import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  // eslint-disable-next-line prettier/prettier
  Typography
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  test: {
    // eslint-disable-next-line consistent-return
    border: (note) => {
      if (note.category === 'work') {
        return '1px solid red';
      }
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <Card elevation={3} className={classes.test}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
