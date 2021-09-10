import { Button, ButtonGroup, Typography } from '@material-ui/core';
import React from 'react';

export default function Create() {
  return (
    <div>
      <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography>
      <hr />
      <Typography color="secondary" noWrap>
        Create a New Note Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quia,
        consequatur quaerat cupiditate debitis, voluptate distinctio iure enim placeat nulla nisi
        iusto earum incidunt quas illo! Reiciendis laborum debitis molestias?
      </Typography>
      <hr />
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>

      <Button type="submit">Submit</Button>
      <Button type="submit" color="primary" variant="contained" disableElevation>
        Submit
      </Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>There</Button>
      </ButtonGroup>
    </div>
  );
}
