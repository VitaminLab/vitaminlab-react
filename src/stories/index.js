import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Card from '../client/components/card'
import CompactCard from '../client/components/card/compact'

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ))

storiesOf('Card', module)
  .add('show card', () => ( 
  	<Card>
      <span>Your stuff in a Card</span>
    </Card>
  ))
