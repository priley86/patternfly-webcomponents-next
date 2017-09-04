# React Patternfly Web Components

This project provides integration for the React.js framework with Patternfly Web Components.

## Getting Started
To consume React Patternfly Web Components, install `patternfly-react-wcs`:
```
$ npm i --save patternfly-react-wcs
```
and then consume the React UI modules in your app:
```
import { Tooltip } from 'patternfly-react-wcs';
```

## Development

### Storybook UI Development

How to use Storybook locally:
```
npm i
npm run storybook
```

How to deploy storybook to github pages in your fork:
```
npm run build-storybook
npm run storybook:deploy
```

To deploy Storybook to a remote other than `origin`, pass a `--remote` flag to `npm run storybook:deploy`.
For example, to deploy to your `upstream` remote:
```
npm run storybook:deploy -- --remote=upstream
```
To deploy Storybook to a target branch and serve with rawgit instead of gh-pages, pass `--branch` flag
to `npm run storybook:deploy`.
For example, to deploy to `feature-branch` target:
```
npm run storybook:deploy -- --branch=feature-branch
```
### Web Components with Skate Js
This demo uses Skate JS to define cross framework compatible Web Components in ES6. Skate JS can be used to optionally define Web Components alongside Google's [Incremental DOM](https://github.com/google/incremental-dom). Read more on Skate JS [here](https://skatejs.gitbooks.io/skatejs/content/).