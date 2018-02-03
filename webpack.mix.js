const mix = require('laravel-mix');

const examples = [
    'basic',
    'label',
    'group',
    'error',
    'advanced'
];

examples.map(example => {
    mix.react(`examples/${example}/index.js`, `examples/build/${example}.js`);
});
