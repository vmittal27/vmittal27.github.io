import './App.css';
import './Project.js'
import './Contact.js'
import resume from "./Resume.pdf"
import Contact from './Contact.js';
import Project from './Project.js';

function App() {
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>VIRESH MITTAL</h1>
        <a className='default-link' href={resume} target='blank' >Resume</a>
      </header>
      <header className="Content-header">
          <br/>
          <p>
            {
              `My name is Viresh, a student at the University of Chicago.`
            }
          </p>
          <p>Check out my past work below.</p>
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
                {'label': 'BeautifulSoup'}
              ]
            }
          />
          <Project
            name="Go"
            link=""
            date="February 2024"
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

export default App;
