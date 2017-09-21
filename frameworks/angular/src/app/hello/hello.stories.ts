import { storiesOf } from '@storybook/angular';
import { HelloExampleComponent } from './examples/hello-example.component';

import { withKnobs, text } from '@storybook/addon-knobs/angular';

storiesOf('Hello', module)
  .addDecorator(withKnobs)
  .add('Hello Skate JS', () => {
    const name = 'I 💗 Web Components';
    const description = text('Description', ' I am inside the slot!');
    return {
      component: HelloExampleComponent,
      props: {
        name,
        description
      }
    };
  });
