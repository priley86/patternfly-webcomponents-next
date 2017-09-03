import { storiesOf } from '@storybook/angular';

import { TooltipExampleComponent } from './examples/tooltip-example.component';
storiesOf('Tooltip', module).add('Tooltip', () => {
  return {
    component: TooltipExampleComponent,
    props: {
      placement: 'right',
      targetSelector: '#btn-right',
      tooltipText: 'On the right.'
    }
  };
});
