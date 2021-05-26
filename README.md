# Minesweeper

![SDG](./docs/button.png)

<!-- \*\* Fix the margin between the main and the board in CSS so that it only adjusts when more squares are added -->

<!-------------------------------------------------------------------------------------->

In this assignment, you will communicate with a back-end API server to create the user-interface for a Minesweeper clone. It might help to familiarize yourself with the game if you have never played it.

<!-- Objectives -->

- Understand how state drives changes to an interface in React
- Respond to user events in React
- Understand and use REST APIs
- Use React lifecycle methods
- Understand and interpret API documentation
- Use fetch or axios to perform POST request or

<!-- Requirements: -->

- Read over the documentation for the API we will be using: https://minesweeper-api.herokuapp.com/

- You will need to interpret the response and render a graphical user interface.
- The API results include an array of arrays (two-dimensional array). These represent rows and columns.
- Consider using flexbox, grid, or an old-fashioned table to organize these.

- Use Insomnia to test out the API. Try "playing" games with the API. This will help you understand the "flow" of the game via the API.

<!-------------------------------------------------------------------------------------->

<!-- Explorer Mode: -->

<!-- DONE -->

- Create a button to create a new game. Use the animated gif above as a user interface guide. Do at least that much, but also feel free to have fun.

<!-- DONE -->

- Left-clicking a cell performs the check action

<!-- DONE -->

- Right/secondary clicking a cell performs the flag action

<!-- DONE -->

When the game status changed to won or lost a victory or failure message - Do not use alert for this. Update the user interface.

--------------------------------------Style the cells appropriately.

<!-------------------------------------------------------------------------------------->

<!-- Adventure Mode: -->

--------------------------------------Before creating the game, allow the user to choose: - Easy, Medium, or Hard mode.

--------------------------------------Have fun with the styling. Make it your own.

<!-------------------------------------------------------------------------------------->

<!-- Epic Mode: -->

--------------------------------------Learn how to use localStorage API to store data in - the browser. Use this to allow the user to close - the browser window and come back to a game already - in progress.

--------------------------------------Add sound effects.
