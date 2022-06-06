const assert = require('assert');

/*

TODO: Implement a function that returns true if the string is a palindrome
using the Stack implementation implemented earlier.

Let's assume emtpy and one character strings are palindromes.
And both "aba" and "abba" are palindromes.
*/

function isPalindromeStack(str) {
    return true;
}   

function testIsPalindromeStack() {
    let testString = "abba";
    assert(isPalindromeStack(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "aba";
    assert(isPalindromeStack(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "abcd";
    assert(!isPalindromeStack(testString), `isPalindrome should return false for testString ${testString}`);
    testString = "a";
    assert(isPalindromeStack(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "";
    assert(isPalindromeStack(testString), `isPalindrome should return true for testString ${testString}`);
    testString = "___13343534534!###";
    assert(!isPalindromeStack(testString), `isPalindrome should return false for testString ${testString}`);
}

testIsPalindromeStack();