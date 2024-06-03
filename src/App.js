import './App.css';
import './Project.js'
import './Contact.js'
import { Routes, Route, Link } from "react-router-dom";
import resume from "./Resume.pdf"
import Contact from './Contact.js';
import Project from './Project.js';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h2><Link className='default-link' to='/'>Viresh Mittal</Link></h2>
        <Link className='default-link' to='/resume'>Resume</Link>
      </header>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  
  return (
    <div className='App'>
      <header className="Content-header">
          <h2>About</h2>
          <font size='4'>Hi! I'm Viresh Mittal, a student studying Computer Science and Economics at the University of Chicago.</font>
      </header>
      <header className='Content-header'> 
        <h2>Contact</h2>
      </header>
          <div className='Contacts'>
            <Contact
              link={'https://github.com/vmittal27'}
              icon={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}
            />
            <Contact
              link={'https://www.linkedin.com/in/vireshm'}
              icon={'https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Icon-Logo.wine.svg'}
            />
            <Contact
              link={'mailto:vmittal@uchicago.edu'}
              icon={'https://cdn-icons-png.freepik.com/256/46/46951.png?semt=ais_hybrid'}
            />
          </div>
        <header className='Content-header'>
          <h2>Projects</h2>
        </header>
        <div className='Project-container'>
          <Project
            name="Walk for Groot"
            link="https://grooot.streamlit.app/"
            date="March 2024"
            description=
            {`Award winning project developed at the UChicago Uncommon Hacks 2024 that calculates net carbon emissions
            between two points using the Google Maps API and a vehicle emissions profile stored in a MongoDB database.
            The website also uses a nearest neighbors algorithm to suggest a mix of walking and driving to reduce emissions. `}
            tags={
              [
                {'label': 'Python'},
                {'label': 'Google Maps API'},
                {'label': 'Streamlit'},
                {'label': 'MongoDB'}, 
                {'label': 'BeautifulSoup'}, 
                {'label': 'HTML'}
              ]
            }
          />
          <Project
            name="Go"
            link=""
            date="March 2024"
            description=
            {
              `Python implementation of the popular board game Go supporting up to 8 players on a GUI or command line interface.
              Allows user to play against a bot based off the minimax algorithm. Code available upon request.`
            }
            tags={
              [
                {'label': 'Python'},
                {'label': 'PyGame'},
                {'label': 'PyTest'},
                {'label': 'Linux'}, 
              ]
            }
          />
        </div>
    </div>
  );
}

function Resume() {
  return (
    <div id ='top' className="App">
      <iframe src={resume} title="Resume" className="pdf" style={{border: "0"}} />
    </div>
  ); 
}

export default App;
