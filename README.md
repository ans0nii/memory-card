# Memory Card Game
A memory card game based on Spider-Man built with React.


## Live Demo
- [https://memory-card-two-eta.vercel.app/](https://memory-card-kappa-ten.vercel.app/)

## Screenshot
<img width="1573" height="1263" alt="image" src="https://github.com/user-attachments/assets/8be21e19-2f21-43a9-99a7-ce906addb3da" />



## How to Play
- Click on any Spider-Man card to start
- As you click unique cards your "current score" will increase
- Try to click on different cards without clicking the same one twice!
- After each card selection the board will shuffle to challenge you
- If you click on the same card twice your score will reset
- Try to beat your high score!

## Technologies Used
- **React**
- **JavaScript ES6**
- **Giphy API** for Spidey GIFs
- **Vite** for build tooling
- **CSS3** with responsive grid layout

## Features
- Dynamic card shuffling after every selection
- Score and high score state management
- Duplicate selection detection logic
- Gif data fetched dynamically from Giphy API
- Environment variable config for API key security
- Responsive grid layout for different screen sizes

## Installation
1. Clone the repository
2. Run `npm install`
4. Create a `.env` file and add: 
   VITE_GIPHY_API_KEY=your_api_key_here
5. Run `npm run dev`

## Things I learned/Demonstrated
- React state-driven rendering
- useState for score and selection tracking
- Array shuffling logic
- API integration using async await
- Secure environment variable handling in vite
