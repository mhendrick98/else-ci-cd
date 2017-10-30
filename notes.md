### Babel
```npm install --save-dev babel-cli babel-preset-env```

Create a new `.babelrc` file with ES2015 as the environment:

```json
{
  "presets": ["env"]
}
```

Add a build step to npm to transpile code to ES2015:

```
"scripts": {
  "build": "babel src -d dist"
}
```

Build your code with ```npm run build```.

### Webpack
See the [Babel Modules](https://babeljs.io/docs/plugins/#transform-plugins-modules) doc for the different module options.

Install Webpack with the Babel loader:

```npm install --save-dev babel-loader webpack```

Add Webpack as a build step to package.json:

```
"scripts": {
  "webpack": "webpack"
}
```

Create a new configuration file `webpack.config.js`:

```javascript
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
```

Compile your code with ```npm run webpack```.

### Mocha + Chai + Sinon

Install [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon]():

```npm install --save-dev mocha chai sinon sinon-chai```

Create a `test` folder and add your tests, following the `$name$-test.js` pattern.  
Add a new test command to `package.json`:

```
"scripts": {
  "test": "mocha --require babel-register"
}
```

Run your tests with ```npm test```.

#### Spies and mocks

### Istanbul

### Karma

### ESLint