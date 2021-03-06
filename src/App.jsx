import logo from './logo.svg';
import './App.css';
import { Hello, HelloWithName }from './components/Hello';
import HelloAgain from './components/HelloAgain';
import IniComponenClass from './components/IniComponentClass';
import IniComponentfunction from './components/IniComponentFuction';
import ButtonCustom from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello/>
        <HelloWithName name="jon" job="programer"/>
        <HelloAgain/>
        {/* <IniComponenClass/>
        <IniComponentfunction/> */}
        <ButtonCustom/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
