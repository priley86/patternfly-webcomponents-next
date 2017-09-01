# Patternfly React WCs

A demo to showcase Patternfly Web Components + Patternfly React Shims


## Storybook UI Development

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
