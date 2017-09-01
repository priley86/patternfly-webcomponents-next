# PatternFly Web Components
This project will provide a set of core web components for the [PatternFly](https://www.patternfly.org) project.

## Getting Started
```
$ npm i
```

## Commiting
Before committing your changes, ensure that all tests pass and the project builds properly: 
```
$ npm run build
$ npm run test
```

Then run `npm run commit` and follow the prompt.

## Git Commit Guidelines

PatternFly Web Components uses a semantic release process to automate package publishing, based on the following commit message format.

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject** ([full explanation](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md)):

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

##### Patch Release
```
fix(pencil): stop graphite breaking when too much pressure applied
```

##### Feature Release
```
feat(pencil): add 'graphiteWidth' option
```

##### Breaking Release
```
perf(pencil): remove graphiteWidth option
```