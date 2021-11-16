import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Components/About';
import ClickCounter from './Components/ClickCounter';
import Condition from './Components/Condition';
import Contact from './Components/Contact';
import Greet from './Components/Greet';
import Hello from './Components/Hello';
import Hooks from './Components/Hooks';
import Message from './Components/Message';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import logo from './logo.svg';
import HowerCounter from './Components/HowerCounter';

function App() {
  return (
    <div className="App">
       <Router>
      <Navbar />
        <Routes>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
    </Router>     
        <Condition /> 
          <HowerCounter />
          <ClickCounter /> 
      { /* <Hooks />  */}
      { /* <Message />   */}
        <Greet name="Bruce"  HeroName="Batman">
         <p>This is Children props</p>
      </Greet>
      <Greet name="Clark"  HeroName="Superman">
      <button>Action</button>
      </Greet>
     <Greet name="Diana"  HeroName="Spiderman"/> 
      {/* <Hello />  */}
      {/* <Welcome name="Bruce"  HeroName="Batman"/>  
      <Welcome name="Clark"  HeroName="Superman"/> 
  <Welcome name="Diana"  HeroName="Spiderman"/> */}
    </div>
  );
}

export default App;
