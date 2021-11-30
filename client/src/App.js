//css
import '../src/App.css'
//components
import  About  from './components/about/about';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';


function App() {
  return (
    <div className="App">
     <Intro/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
