import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code> 09/11/2023 - TURNO MAÑANA</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          SALUDOS <br></br>
          ALVARADO DIAZ BENJAMIN PAOLO
        </a>
      </header>
    </div>
  );
}

export default App;