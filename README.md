# PatternFly Web Components
This project will provide a set of core web components for the [PatternFly](https://www.patternfly.org) project.

Web components are a new web standard comprised of [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/), [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/), and [HTML Templates](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/). 

Currently, this project also provides framework integrations for the [Angular](https://angular.io/) and [React](https://facebook.github.io/react/) frameworks.

## Getting Started
To consume the web component ES6 modules directly, install `patternfly-webcomponents`:
```
$ npm i --save patternfly-webcomponents
```
Then define them in your app:
```
import { PfPopover } from 'patternfly-webcomponents'
customElements.define('pf-popover', PfPopover)
```

## Framework Integration
Web components implemented as ES6 modules can be consumed and extended by any framework. However, to ease integration for the consumer, a framework shim (wrapper) is also provided. Framework shims can be consumed optionally and will simplify the integration to ensure a similiar framework experience.

This project includes visual UI tests (stories) for various UI frameworks using [Storybook](https://storybook.js.org/). Storybook provides a full fledged development environment, testing and documentation addons, along with the ability to deploy a contributor's storybook. This allows you to develop and test component interactions in isolation, which can improve component reuse, testability, and development speed.

### Angular Js
For details on Angular Js and Patternfly Web Components integration, see the [Angular Patternfly Web Components](frameworks/angular) guide.

### React Js
For details on React Js and Patternfly Web Components integration, see the [React Patternfly Web Components](frameworks/react) guide.

## Contributing
To contribute to Patternfly Web Components, please see our [CONTRIBUTING](CONTRIBUTING.md) guide.

### Development
To build web component ES6 modules in this project, simply run:
```
$ npm i
$ npm run build
```
This project uses [Karma](http://karma-runner.github.io/1.0/index.html) for testing. You can run tests with:
```
$ npm run test
```
This project also uses [Prettier](https://github.com/prettier/prettier) and the [Javascript Standard Style](https://standardjs.com/) to ensure well formatted code. Please [enable Prettier in your IDE](https://github.com/prettier/prettier#editor-integration) before contributing.

### Running integration builds and tests
Before opening your pull request, please ensure all framework builds and integration tests pass:
```
$ npm run build:all
$ npm run test:all
``` 

### Web Components with Skate Js
This demo uses Skate JS to define cross framework compatible Web Components in ES6. Skate JS can be used to optionally define Web Components alongside Google's [Incremental DOM](https://github.com/google/incremental-dom). Read more on [Skate JS](https://skatejs.gitbooks.io/skatejs/content/docs/api/vdom.html#incremental-dom).