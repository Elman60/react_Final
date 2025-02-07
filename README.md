აპლიკაცია მოიცავს მომხმარებლის ავთენტიფიკაციას, ტრანზაქციების სანახავ Dashboard-ს და light/dark თემის გადართვის ფუნქციას.

## Features

- User authentication system
- Protected routes for authenticated users
- Dashboard with transactions
- Dark/Light theme toggle
- Smooth page transitions and animations

## Technologies Used

### Core
- React.js
- React Router v6
- Framer Motion
- Axios

### State Management
- React Hooks (useState, useEffect)
- Custom hooks for:
  - Authentication (useAuth)
  - API fetching (useFetch)
  - Theme management (useTheme)
  - Local storage management (useLocalStorage)


## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 14.0.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/probank.git
cd probank
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
