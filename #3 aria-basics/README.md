# Topics

## Accessibility / ARIA

You can find the recordings of the tutoring session from the 05/30/2022 [on YouTube](https://www.youtube.com/watch?v=PNpGyFyjpaw).

### Key Takeaways

- Use semantic HTML elements to make your website more accessible (nav, main, section, article, aside, header, footer, etc.).
- Use the anchor or form element for actions that navigate the user to a new page.
- Use the button element for generic actions triggered by the user.
- If you don't like how a button or anchor tag is designed, don't use a div instead, just use `all: unset;` on the element to reset all default styles!
- Do not use span, div, or other non-interactive elements as buttons or links unless you have a very good reason (e.g., a nested button within a button).
- Use `aria-label` for buttons where the content is not a label for the button.
- Use `aria-hidden` to hide elements that do not add any information other than visual appeal.
- Make sure all interactive elements can be focused by the user and that the user is able to identify the currently focused element. Don't do `outline: none` unless you provide alternative strong visual feedback. Or better: just alter  the default `outline` to something that fits your design.
- Screen readers will not read through your JavaScript. So make sure that your HTML is semantically descriptive. JavaScript should only be used to enhance the default experience, not to replace/prevent defaults.

Accessibility is a very important part of the web. It is important to make your website accessible to all users. Make sure to keep accessibility in mind when you are designing your website.

**Please note**, I am definetly not an expert on ARIA and there is nuance to everything I noted here. For instance, there are alternatives of `aria-label`. You could also use a screen-reader only class to add a hidden text label to the button. You can add a `title` element to an SVG icon to provide a label for the icon. Etc. Etc. There is a lot of pros and cons to each approach. The takeaways are meant to give you a head start on how to make your website accessible. BUT there is so much more to it!
