# Topics 

## Make an DOM element appear in two different locations based on some state

How can one make a DOM element appear in two different locations based on some state?

### Option 1: Two Elements - display-none

In my opinion, **the easiest solution**: Make it two separate elements and hide one of them!

This is easy to do! On user interaction, run some JavaScript to toggle a class on the elements. One element becomes visible, the other becomes hidden and vice versa. You can find a simple implementation of this in the [index.html](/one-element-two-positions/index.html) file!

Why is this the easiest solution? Because you don't have to alter the content of the elemnts. Both elements can have different styles, inner text, attributes and you don't have to adapt them.

### Option 2: One Element

Similarly, you can alter one element based on user interaction to make it appear in two different locations or display different content! This works kind of the same as the first option, but you have to alter the content of the element as well! You can find a simple implementation of this in the [index2.html](/one-element-two-positions/index2.html) file!

Instead of using `display: none` to hide the element, you can use `left: -100%` to hide it in combination with `position: absolute`. What is the benefit? Animations! If you change the location of one element on the page, you can animate it! This is what Nicole did for her portfolio sidebar/navmenu. For this option, you only need to toggle the class on one button (since there is only one button). You can find the code [here](https://github.com/Nicole-Cupp/personal-Portfolio/blob/aa22693027109eb374a4d80d8cf9dab06f04d039/assets/javascript/main.js#L5).

Instead of `display: none`, you can move the element outside the view through absolute positioning and `left: -100%`. Now it's out of the view of the user but it has a position in the DOM! Now you can use transitions to move it around! That's what Nicole did for her portfolio sidebar/navmenu as you can see [here](https://github.com/Nicole-Cupp/personal-Portfolio/blob/aa22693027109eb374a4d80d8cf9dab06f04d039/assets/css/main.css#L480).

