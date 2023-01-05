<div id="top"></div>

<div align="center">
  <!-- <a href="https://opus-live.netlify.app/">
    <img src="https://user-images.githubusercontent.com/78133928/210550123-fe685695-5cb7-473e-bfa0-6eb72c29b78a.png" alt="Logo" height="25">
  </a> -->

  <h1 align="center">Erudite</h1>

  <p align="center">
    Learn everyday!
  </p>
</div>

</br>

![Erudite](https://user-images.githubusercontent.com/78133928/210550452-70aba49c-39f5-4e4d-85de-ddf2bc396c62.png)

<!-- HOSTED LINK -->

## Hosted Link

<a href="https://opus-live.netlify.app/" target="_blank">https://opus-live.netlify.app/</a>

<!-- ABOUT THE PROJECT -->

# About

<!-- Opus is a productivity website, built using the MERN stack. It provides a one-stop solution for users to enhance their organizing capabilties by scheduling their upcoming events in calendars, jotting down their tasks and notes, and using a timer to break down work durations into short yet effective time periods for the best results. -->

Erudite is a video streaming and sharing website, built using the MERN stack.

<!-- FEATURES IMPLEMENTED -->

# Features Implemented

## Frontend

- Users can create an account to access the features available.

## Backend

1. Auth Routes

- /register
  - Account credentials are securely authenticated and stored in the database.
- /login
  - Only valid credentials are accepted at login.
  - JWT and cookies are used for verification.

2. API Routes

- Users

  - /createNote
    - Creates and adds a note to the database.

- Videos

  - /createTodo
    - Creates and adds a todo to the database.

- Comments

  - /createEvent
    - Creates and adds an event to the database.

<!-- BUILT WITH -->

# Built With

- React.js
- Styled Components
- Express.js
- Node.js
- MongoDB
- Redux
- Firebase
- JWT
- Bcrypt
- Cookie Parser

<!-- GETTING STARTED -->

# Getting Started

1. Fork the repository
2. Clone the repository

```sh
git clone https://github.com/disha9112/Erudite.git
```

3. Open the folder containing the cloned repository in the terminal
4. Navigate to the server folder in a new terminal and install the npm packages and libraries

```sh
cd server
npm install
```

5. Set up a .env file (check the .example.env file) with custom keys and run the server

```sh
npm run dev
```

6. Navigate to the client folder in a new terminal and install the packages and libraries

```sh
cd client
npm install
```

7. Set up a .env file (check the .example.env file) with custom keys and run the server

```sh
npm run dev
```

8. Run the client side of the website

```sh
npm start
```
