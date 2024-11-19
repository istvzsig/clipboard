# Clipboard

This repository contains a JavaScript function that allows you to copy text from various HTML elements to the clipboard. It provides user feedback and handles errors gracefully.

## Function Overview

The `copyTextToClipboard` function takes a source HTML element as an argument and returns an asynchronous callback function. When invoked, this callback will copy the text from the specified element to the clipboard.

### Function Signature

```javascript
function copyTextToClipboard(sourceElement);
function blockClipboardEvents();
```

## User Manual

### Installation
1. Include the JavaScript file in your HTML document or copy the function directly into your script.
2. Ensure you have an HTML element (like a button) to trigger the copy action and a source element (like an input field) from which to copy the text.

## How to Use
1. Set Up Your HTML: Create an input field or any other element containing the text you want to copy.
2. Create a Button: Add a button that will trigger the copy action.
3. Attach the Function: Use the copyTextToClipboard function to attach the copy functionality to the button click event.

### Example HTML
```html
<input type="text" id="textInput" value="Copy this text!" />
<button id="copyButton">Copy Text</button>
```

### Example JavaScript
```javascript
const copyButton = document.getElementById('copyButton');
const textInput = document.getElementById('textInput');

copyButton.addEventListener(
    'pointerdown',
    copyTextToClipboard(textInput)
);
```

### Additional Notes
1. Ensure that your web page is served over HTTPS, as the Clipboard API requires a secure context.
2. The blockClipboardEvents function can be used to prevent default clipboard actions if needed.

Feel free to customize the content further based on your specific requirements!
