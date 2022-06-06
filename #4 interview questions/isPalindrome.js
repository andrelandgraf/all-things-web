const assert = require('assert');

/*

TODO: Implement a function that returns true if the string is a palindrome.

Let's assume emtpy and one character strings are palindromes.
And both "aba" and "abba" are palindromes.
*/

function isPalindrome(str) {
    return true;
}   

function testIsPalindrome() {
    let testString = "abba";
    assert(isPalindrome(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "aba";
    assert(isPalindrome(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "abcd";
    assert(!isPalindrome(testString), `isPalindrome should return false for testString ${testString}`);
    testString = "a";
    assert(isPalindrome(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "";
    assert(isPalindrome(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "___13343534534!###";
    assert(!isPalindrome(testString), `isPalindrome should return false for testString ${testString}`);
}

testIsPalindrome();