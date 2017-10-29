### Babel
```npm install --save-dev babel-cli babel-preset-env```

Create a new `.babelrc` file with ES2015 as the environment

```json
{
  "presets": ["env"]
}
```

Add a build step to npm to transpile code to ES2015

```json
"scripts": {
  "build": "babel src -d dist"
}
```

### Webpack

### Jasmine

### Karma

### Istanbul