'use strict';

import { greet, invertCase } from '../js/app'; //import the functions to test!

/* tests go here */

describe('Basic math', function () {
    test('should add numbers correctly', function () {
        let result = 1 + 1;
        expect(result).toEqual(2);
    });
});

describe('invertCase() function', function () {
    test('should invert lowercase to uppercase correctly', function () {
        let inverted = invertCase('thequickbrownfoxjumpsoverthelazydog');
        expect(inverted).toEqual('THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG');
    });
    
    test('should invert uppercase to lowercase correctly', function () {
        let inverted = invertCase('THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG');
        expect(inverted).toEqual('thequickbrownfoxjumpsoverthelazydog');
    });
    
    test('should invert mixes of upper and lowercase correctly', function () {
        let inverted = invertCase('tHeQuIcKbRoWnFoXjUmPsOvErThElAzYdOg');
        expect(inverted).toEqual('ThEqUiCkBrOwNfOxJuMpSoVeRtHeLaZyDoG');
    });
});