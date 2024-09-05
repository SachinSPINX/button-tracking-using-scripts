//If the button doesn't have a class or ID, you can select it based on other attributes or its position in the DOM. For example, you can use the button's text, type, or position within a container. Here are a few ways to handle this:

//1. Select by Button Text
//If the button has unique text, you can select it based on the text content:

//javascript

document.querySelector('button:contains("Button Text")').addEventListener('click', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'customButtonClick',
        'buttonLabel': 'Button with specific text',
    });
});
//Replace "Button Text" with the actual text inside the button. However, the :contains() selector is not natively supported by JavaScript, so for this to work, you'd need to use jQuery. Alternatively, you can write a custom function to find a button by its text.

//2. Select by Button Position in the DOM
//If the button is located within a specific container, you can select it based on its position within that container. For example, if it’s the first button inside a div:

//javascript

document.querySelector('div button:nth-child(1)').addEventListener('click', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'customButtonClick',
        'buttonDescription': 'First button in the div',
    });
});

//This code will track the first button inside a specific div. You can adjust the selector to match your button’s position within its parent element.

//3. Select by Button Type or Other Attributes
//You can also select the button using other HTML attributes like type, name, or aria-label.

//For example:

//javascript

document.querySelector('button[type="submit"]').addEventListener('click', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'customButtonClick',
        'buttonType': 'Submit button',
    });
});

//4. Select by Using the Parent Element and Traversing
//If the button is within a specific parent, you can use a selector to identify the parent, then target the button within it. For example, selecting the first button inside a form:

//javascript

document.querySelector('form button').addEventListener('click', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'customButtonClick',
        'buttonContext': 'Button inside form',
    });
});

//5. Add a Class or ID via JavaScript (If Possible)
//If none of the above methods are reliable or you want a more permanent solution, you can dynamically add an ID or class to the button using JavaScript:

//javascript

const button = document.querySelector('button');
button.id = 'uniqueButtonID';  // Add ID dynamically
button.addEventListener('click', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'customButtonClick',
        'buttonID': 'uniqueButtonID',
    });
});

//This approach makes future tracking easier by adding an ID or class to the button programmatically.
