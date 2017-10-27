'use strict';

import * as fs from 'fs'; //import functions for working with file system
const htmlContent = fs.readFileSync('index.html', 'utf-8'); //load the HTML content

// Make libraries available
const $ = require('jquery');
window.$ = $;

// Load in javascript
require('../js/index.js');

/* Your tests go here */
describe('Panic button', function() {
    test('should display alert when pressed', function() {
        $('button').click();
        expect($('.alert').css("visibility") == "hidden").toEqual(false);
    });
});