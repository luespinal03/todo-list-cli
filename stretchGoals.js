/* Stretch Goals

Stretch Goals

[] Re-organize your code to make use of functions
[] Allow the user to both complete and uncomplete to-do items
[] Allow the user to fully delete a to-do item from the list
[] Allow the user to edit the text of an existing to-do item
[] Get creative! Add a new feature that you would find useful in a to-do list

*/





const prompt = require('prompt-sync')({
    sigint: true
});

console.log("\n\nWelcome to the To-Do List Manager Application\n");
console.log("Select an action: ");
console.log("[1] Create to-do item");
console.log("[2] Complete to-do item");
console.log("[3] Exit the application");
let choice = Number(prompt("> ")); // user can input their choice here

let items = [""] // our list of to do items // starts at 1 "" place holder for index 0
let statusArray = [""]

while (choice !== 3) { // exit out of the app
    if (choice === 1) {
        console.log("\nCreate a new item\n");
        // prompt user for new item
        let answer = prompt("Please enter an item: ");
        items.push(answer);
        statusArray.push(false);
        // console.log(items);
        // console.log(statusArray);
        printList();
        selectChoice();
    } else if (choice === 2) {
        if (statusArray.length > 1) {
            console.log("\nSelect item to be completed\n");
            // prompt user for item number to complete
            let indexChoice = Number(prompt("Enter a number: "));

            /*
                Error checking
                indexChoice cannot be:
                - a number greater than the size of the current list
                - 0
                - a string
            */
            while (indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)){  
                // if its not a number 
                // if user selects number greater than array length or zero
                // if user inputs a string
                console.log("Please choose a number that corrersponds to an item in the list.");
            indexChoice = Number(prompt("Enter a number: "))
        }
        if (statusArray[indexChoice] === false) {
            statusArray[indexChoice] = true;
        }
        
    } else {
        console.log("You have no items in your to-do list")
    }
// showcase changed list
    printList();
    selectChoice();
} else {
    // if they pick anything that isn't 1 or 2
    console.log("\nPlease, choose a number between [1], [2], [3]");
    selectChoice();
}
}


////////////////////////////////////////////////////////////////////////////////


// FUNCTIONS
function selectChoice() {

    console.log("Select an action: ");
    console.log("[1] Create to-do item");
    console.log("[2] Complete to-do item");
    console.log("[3] Exit the application");
    choice = Number(prompt("> "))
}


function printList() {
    console.log("")
    console.log("Current to do list: ");
    let status = ""
    for (let i = 1; i < items.length; i++) {
        // if statement to check if status is true or false
        if (statusArray[i] === false) {
            status = "[incomplete] "
        } else if (statusArray[i] === true)
            status = "[complete] "
        console.log(i + ". " + status + items[i]);
    }
    console.log("")
}



// function itemCompleted(){
//     console.log("");
//     console.log("Choose what item you wish to mark completed");
//     choice = Number(prompt("> "));


// }



/* 

1. Figure out the UI

    [X]- console.logs()

        [X] - different user options
        [X] - welcome message

    [X] - Prompts 
        [X] - check if they input 1 or 2 - if statement
            [X] 1 for adding an item
            [X] 2 for completing an item

    []  - Display the list to the user

2. Store to-do list items (choice === 1)

    [X] - prompt user for to-do list item

    [X] - array to store prompt as a to-do list item

    [X] - .push() add to-do list item to array

    [X] - store those items as incomplete (whenever user adds item to the list 
        store it as incomplete)

            - incomplete = false
            - complete = true

            let statusArray = []; 

    [X] - start to-do list at 1 (instead of index 0)

    items: ["", "wash dog", "go for walk", "get groceries", "wash car ]
    status:["",   false,         true,           false,      false]

3. Completing Incomplete items (choice === 2)

    [] - prompt for number that is the same as the number in the to-do list that we are trying to mark as complete



    statusArray[2]
    statusArray[1]
    - at the index the user specifies, change false to true 
    (incomplete -> complete) for that item

    [] - conditional to check completing status

    [] - change false to true

    [] - ask user which item they want to complete

    [] - conditional to check completion status




*/