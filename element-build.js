const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-elements-test/runtime.js',
        './dist/angular-elements-test/polyfills.js',
        './dist/angular-elements-test/scripts.js',
        './dist/angular-elements-test/main.js',
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/counter-test.js');

    await fs.copyFile('./dist/angular-elements-test/styles.css', 'elements/styles.css')

    // await fs.copy('./dist/angular-elements-test/assets/', 'elements/assets/' )
    
})()