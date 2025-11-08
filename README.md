Setup:
1. Download or clone the helpdesk-board file off of Github.
2. Place the unzipped file in C:/Users/YourName
3. Within the Terminal run:
cd helpdesk-board
npm install
npm run dev
4. Open http://localhost:3000 within your browser

Checklist:
Project Setup & Structure - File Structure features all required files, including all components, route.js. & README.md

Components + JSX + Keys - All components are accounted for and functioning, and ticket IDs are utilized

Props + Lifting State - Board.jsx acts as the parent to the rest of components, it's children

State + Controlled Inputs - useState is used in Board.jsx, filters and search are controlled

Effects + Cleanup - Fetches tickets from route.js, simulates live updates, cleans and resets upon refresh

UX + Conditional Rendering - StatusMessage.jsx allows loading, error, and empty states, buttons become disabled when unavailable, hover effects