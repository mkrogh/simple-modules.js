# Simple modules

A very simplistic take on modular js, for when you just need to split your js into multiple files.

## Usage

```html
  <script data-modules='modules.json, js/main.js' src='/js/simple-modules.js' type='text/javascript'></script>
```

The above snippet will load all files defined in modules.json and then load `js/main.js`.

```javascript
  //An example modules.json
  [
    'lib/jquery.min.js',
    'js/models.js'
  ]
```

## Uglifying etc.

To uglify you just need to concatanate the files togther, in the order they are defined.
