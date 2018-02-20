const mix = require('laravel-mix');

const examples = [
    'basic',
    'label',
    'group',
    'error',
    'advanced',
    'custom_checkbox',
    'advanced_control',
    'select',
    'radio'
];

examples.map(example => {
    mix.react(`examples/${example}/index.js`, `examples/build/${example}.js`);
});
