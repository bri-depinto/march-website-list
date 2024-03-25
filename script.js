// create an array to store names

const namesArray = []

function addName() {

    // storing name input element as a variable

    const nameInput = document.getElementById('nameInput')

    // obtain the trimmed value of the input box and store it as a variable

    const name = nameInput.value.trim()

    // add the name to the end of the array

    namesArray.push(name)

    // call the displayNames function to update the list

    displayNames()
    
    // clear the input field after adding the name
    nameInput.value = ''
}

function displayNames() {
    const nameList = document.getElementById('nameList')

    // clear out previous list items

    nameList.innerHTML = ''

    for (let i = 0; i < namesArray.length; i++) {
        const name = namesArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)
    }
}

// event listener for the button clicks to add a name
document.getElementById('addNameBtn').addEventListener('click', addName)