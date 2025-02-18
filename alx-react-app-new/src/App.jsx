import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Including the WelcomeMessage component */}
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Counter />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <h1>"Hello everyone, I am learning React at ALX!"</h1>
      <p>"I am learning about JSX!"</p>
    </>
  );
}

export default App;
