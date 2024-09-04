# Bookmark Your Favorite Sites

This is a simple web application that allows users to bookmark their favorite websites. Users can input the name and URL of a site, and the application will display these bookmarks on the page.

## Features

- **Bookmark Submission**: Users can submit the name and URL of a website they want to bookmark.
- **Error Handling**: The form validates input fields and displays error messages if the required fields are empty.
- **Dynamic Bookmark List**: Bookmarks are dynamically added to the list displayed on the webpage.
- **Responsive Design**: The application uses Bootstrap for a responsive and clean design.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling, including Bootstrap for responsive design and custom styles.
- **JavaScript**: Interactivity, including form validation and dynamic content update.

## Setup and Usage

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-jaswanthaitha21/bookmark_maker.git
    cd bookmark_maker
    ```

2. **Open the `Bookmark Maker.html` file**:
   Open the `Bookmark Maker.html` file in your web browser to view and use the application.

3. **Usage**:
   - Enter a site name and its corresponding URL in the form provided.
   - Click the "Submit" button.
   - The bookmark will be added to the list displayed below the form.

## File Structure

- `Bookmark Maker.html`: The main HTML file containing the structure of the webpage.
- `Bookmark Maker.css`: CSS file with custom styles for the webpage.
- `Bookmark Maker.js`: JavaScript file that handles form submission, validation, and dynamic updates.

## How It Works

1. **Form Handling**: The form captures the site name and URL. JavaScript validates the input to ensure both fields are filled.
2. **Dynamic Bookmark Addition**: On successful validation, a new list item is created and added to the bookmarks list with the site name as the heading and the URL as a clickable link.
3. **Styling**: The application uses Bootstrap and custom CSS to maintain a consistent and user-friendly design.

## Future Improvements

- **Local Storage**: Implement local storage to save bookmarks even after the page is refreshed.
- **Edit/Delete Bookmarks**: Add features to edit or delete existing bookmarks.
- **URL Validation**: Improve URL validation to ensure the input is a valid URL format.
