import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="about">About</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
    
    </div>
  )
}
{/* write an <About> component here */}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  )
  }

function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;