import './css/App.css';
import './css/home.css';
import './css/about.css';
import './css/contact.css';
import './css/projects.css';
import './css/footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>

  );
}

export default App;
