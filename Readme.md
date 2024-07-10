# Toy Tale

This is a simple web application that allows users to view, add, and like toys. The application is built using HTML, CSS, and JavaScript, and it interacts with a JSON server to fetch and store toy data.

## Technologies Used

- **HTML**: Used for structuring the content of the application.
- **CSS**: Used for styling the application.
- **JavaScript**: Used for adding interactivity and fetching data from the server.
- **JSON Server**: Used as a mock backend to store and retrieve toy data.

## Features

- **View Toys**: Fetch and display a list of toys from the server.
- **Add Toy**: Submit a form to add a new toy to the server.
- **Like Toy**: Click a button to increment the like count for a toy.

## How It Works

1. **HTML Structure**: The HTML file (`index.html`) contains the structure of the web page, including a form to add new toys, a button to toggle the visibility of the form, and a container to display the toy collection.

2. **CSS Styling**: The CSS file (`index.css`) provides styling for the form, buttons, and toy collection to create a clean, modern look.

3. **JavaScript Functionality**: The JavaScript file (`index.js`) contains the following functionality:
   - Fetching toy data from the server and rendering it on the page.
   - Handling form submission to add a new toy.
   - Updating the like count for a toy when the like button is clicked.

### Detailed Explanation

#### Fetching and Rendering Toys

When the document is loaded, the `fetchAndRenderData` function is called to fetch toy data from the server (`http://localhost:3000/toys`). The data is then passed to the `renderToys` function, which creates HTML elements for each toy and appends them to the toy collection container.

#### Adding a New Toy

When the "Add a new toy!" button is clicked, the visibility of the form is toggled. When the form is submitted, the `addToyForm` event listener prevents the default form submission behavior, retrieves the form data, and sends a POST request to the server to add the new toy. The newly added toy is then displayed in the toy collection.

#### Liking a Toy

Each toy has a like button that increments the like count when clicked. The `updateLikes` function sends a PATCH request to the server to update the like count for the toy.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- JSON Server installed globally (`npm install -g json-server`).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/toy-tale.git
   cd toy-tale

   ```

2. Start the JSON Server:
   json-server --watch db.json
