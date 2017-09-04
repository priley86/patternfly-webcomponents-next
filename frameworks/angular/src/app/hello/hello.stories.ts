import { storiesOf } from '@storybook/angular';
import { HelloExampleComponent } from './examples/hello-example.component';

storiesOf('Hello', module).add('Hello Skate JS', () => {
  return {
    component: HelloExampleComponent,
    props: {
      name: 'I 💗 Web Components'
    }
  };
});
