const assert = require('assert');

/*

TODO: Implement a function that returns true if all the characters in a string are unique.

Bonus question: How can you alter the function so that case does not matter?
*/

function allUnique(str) {
    return true;
}   

function testAllUnique() {
    let testString = "abcdefghijklmnopqrstuvwxyz";
    assert(allUnique(testString), `allUnique should return true for testString ${testString}`);
    testString = "aa";
    assert(!allUnique(testString), `allUnique should return false for testString ${testString}`);
    testString = "aA";
    assert(allUnique(testString), `allUnique should return true for testString ${testString}`);
    testString = "cat and dog";
    assert(!allUnique(testString), `allUnique should return false for testString ${testString}`);
    testString = "cat&dog";
    assert(allUnique(testString), `allUnique should return true for testString ${testString}`);
    testString = "";
    assert(allUnique(testString), `allUnique should return true for testString ${testString}`);
    testString = "  ";
    assert(!allUnique(testString), `allUnique should return false for testString ${testString}`);
}

testAllUnique();