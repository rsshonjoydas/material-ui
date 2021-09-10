import { Button, Container, Typography } from '@material-ui/core';
import { AcUnitOutlined, KeyboardArrowRight, Send } from '@material-ui/icons';
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
        startIcon={<Send />}
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>

      <br />
      <AcUnitOutlined />
      <AcUnitOutlined color="secondary" fontSize="large" />
      <AcUnitOutlined color="secondary" fontSize="small" />
      <AcUnitOutlined color="action" fontSize="small" />
      <AcUnitOutlined color="error" fontSize="small" />
      <AcUnitOutlined color="disabled" fontSize="small" />
    </Container>
  );
}
