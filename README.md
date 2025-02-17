# React Movie App

A lightweight movie application built with React and Vite that allows you to search for and browse movies from The Movie Database (TMDB) API. The app also leverages Appwrite to track trending movies and update search counts, providing insights into popular searches.

## Features

- **Movie Search:** Quickly search through thousands of movies with built-in debounce functionality to optimize API calls.
- **Trending Movies:** Displays trending movies based on search activity tracked via Appwrite.
- **Movie Cards:** Each movie is displayed in a card format featuring the poster, title, overview, rating, release date, and language.
- **Responsive UI:** Styled with Tailwind CSS for a modern, responsive design.
- **Fast Development:** Powered by Vite for instant server start and hot module replacement.
- **Clean Codebase:** Uses ESLint and Prettier for code consistency and quality.

## Getting Started

### Prerequisites

- Node.js (v14 or later is recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory:**

   ```bash
   cd react-course
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the project's root directory with the following content (replace the placeholder values with your actual keys):

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   ```

   *Note:* Both `.env` and `package-lock.json` are ignored by Git as defined in your `.gitignore`.

### Running the Application

Start the development server with:

```bash
npm run dev
```
or
```bash
yarn dev
```

Then, open your browser and navigate to [http://localhost:3000](http://localhost:3000) (or the port specified by Vite) to see the application in action.

### Building for Production

To prepare the app for deployment, run:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

## Folder Structure

```
react-course/
├── public/                    # Public assets and index.html
├── src/
│   ├── components/            # Reusable components (MovieCard, Search, Spinner, etc.)
│   ├── hooks/                 # Custom hooks (e.g., useBounce)
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   ├── appwrite.js            # API integration with Appwrite
│   └── index.css              # Global styles and Tailwind CSS directives
├── vite.config.js             # Vite configuration
├── package.json               # Project metadata and scripts
├── jsconfig.json              # JavaScript project configuration
├── .gitignore                 # Ignored files and directories
└── README.md                  # Project documentation (this file)
```

## Technologies Used

- **React** – A JavaScript library for building interactive user interfaces.
- **Vite** – A fast and modern build tool for frontend development.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Appwrite** – Backend server for managing databases and authentication.
- **react-use** – A collection of essential React Hooks.
- **ESLint & Prettier** – Tools for ensuring code quality and consistency.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements. Ensure your changes align with the existing coding style and the project's architecture. Before committing any changes, run the linter tests:

```bash
npm run lint
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for movie data.
- [Appwrite](https://appwrite.io/) for the backend as a service.
- [Vite](https://vitejs.dev/) for the speedy development environment.
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities.
