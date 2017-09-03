import { storiesOf } from '@storybook/angular';
// import { Welcome } from '@storybook/angular/demo';
import { WelcomeComponent } from './welcome.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: WelcomeComponent,
  props: {}
}));
