import { configure } from '@storybook/react';
import 'bootstrap-loader';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
