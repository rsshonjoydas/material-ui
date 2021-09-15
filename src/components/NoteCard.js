import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  // eslint-disable-next-line prettier/prettier
  Typography
} from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { DeleteOutline } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'work') {
        return yellow[700];
      }
      if (note.category === 'money') {
        return green[500];
      }
      if (note.category === 'todo') {
        return pink[500];
      }
      return blue[500];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
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
