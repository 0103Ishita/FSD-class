// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="container">
      <h2>welcome to react vite</h2>
      <h3 style={{ backgroundColor: "cyan", color: "brown" }}>
        <Profile />
      </h3>
    </div>
  );
}

export default App;
