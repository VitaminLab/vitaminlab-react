import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Welcome from './Welcome';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Button } from 'reactstrap';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
