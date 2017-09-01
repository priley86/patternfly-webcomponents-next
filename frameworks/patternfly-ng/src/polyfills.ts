import 'core-js/es6';
import 'reflect-metadata';

// Web Component polyfills
import '@webcomponents/webcomponentsjs/webcomponents-sd-ce.js';
import '@webcomponents/custom-elements/src/native-shim.js';

require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
