// Get a reference to the form element with the ID 'item-form'
const itemForm = document.getElementById('item-form');
// Get a reference to the input field element with the ID 'item-input'
const itemInput = document.getElementById('item-input');
// Get a reference to the list element with the ID 'item-list'
const itemList = document.getElementById('item-list');

// Function to handle adding an item to the list
function addItem(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the value of the input field
    const newItem = itemInput.value;

    // Validate the input to ensure it's not empty
    if (newItem === '') {
        // If the input is empty, display an alert message and return
        alert('Please add an item');
        return;
    }

    // Create a new list item element
    const li = document.createElement('li');

    // Set the text content of the list item to the new item
    li.appendChild(document.createTextNode(newItem));

    // Create a button element with specific classes and a red 'X' icon
    const button = createButton('remove-item btn-link text-red');

    // Append the button to the list item
    li.appendChild(button);

    // Append the list item to the list
    itemList.appendChild(li);

    // Reset the value of the input field to an empty string
    itemInput.value = '';
}

// Function to create a button element with specified classes and a red 'X' icon
function createButton(classes) {
    // Create a button element
    const button = document.createElement('button');

    // Set the class attribute of the button element
    button.className = classes;

    // Create an icon element with specific classes
    const icon = createIcon('fa-solid fa-xmark');

    // Append the icon to the button
    button.appendChild(icon);

    // Return the button element
    return button;
}

// Function to create an icon element with specified classes
function createIcon(classes) {
    // Create an icon element
    const icon = document.createElement('i');

    // Set the class attribute of the icon element
    icon.className = classes;

    // Return the icon element
    return icon;
}

// Add an event listener to the form element for the 'submit' event
itemForm.addEventListener('submit', addItem);
