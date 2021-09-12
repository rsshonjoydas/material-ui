import { Button, Container, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import React from 'react';

export default function Create() {
  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
    </Container>
  );
}
