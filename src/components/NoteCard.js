import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import React from 'react';

const NoteCard = ({ note, handleDelete }) => (
  <div>
    <Card elevation={3}>
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
  </div>
);

export default NoteCard;
