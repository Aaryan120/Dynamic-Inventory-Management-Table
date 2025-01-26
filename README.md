# Dynamic Inventory Management Table

A simple and interactive inventory management application built with React.js. This app helps users efficiently track and manage stock, allowing them to add, edit, delete, and filter inventory items dynamically.

---

## Features

- **Add Items**: Easily add new products to the inventory by providing details like name, category, price, and quantity.
- **Edit/Delete Items**: Update existing item details or remove items from the inventory.
- **Filter by Category**: Quickly search and view items based on their categories.
- **Sort by Quantity**: Sort items in ascending or descending order based on their quantity.
- **Low-Stock Highlighting**: Automatically highlights items with quantities below 10 to prioritize restocking.

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Table Library**: [react-super-responsive-table](https://github.com/emibcn/react-super-responsive-table)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dynamic-inventory-management.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dynamic-inventory-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Add Items**:
   - Click the **Add Items** button.
   - Fill out the item details in the form.
   - Submit to add the item to the inventory.

2. **Edit Items**:
   - Click the edit icon next to the item.
   - Update the necessary details and save.

3. **Delete Items**:
   - Click the delete icon next to the item to remove it from the inventory.

4. **Filter by Category**:
   - Enter a category name in the search bar to filter items.
   - Use the "Show All" button to reset the filter.

5. **Sort Items**:
   - Click the sort button in the Quantity column header to toggle between ascending and descending order.

---

## Project Structure

```
src/
|-- components/
|   |-- InventoryTable.js   // Renders the inventory table
|   |-- InventoryForm.js    // Form to add or edit items
|-- App.js                  // Main application logic
|-- index.css               // Global styles
```

---

## Future Enhancements

- Add user authentication for secure access.
- Export inventory data as CSV or Excel.
- Implement pagination for large inventories.
- Integrate with a backend API for persistent storage.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [react-super-responsive-table](https://github.com/emibcn/react-super-responsive-table)
- Tailwind CSS for styling simplicity and flexibility.

---

Feel free to contribute or report issues to make this project better!

