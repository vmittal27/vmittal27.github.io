import './App.css';
import './Project.js'
import './Contact.js'
import Contact from './Contact.js';
import Project from './Project.js';

function App() {
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>VIRESH MITTAL</h1>
      </header>
      <header className="Content-header">
          <br/>
          <p>
            Hi! I'm Viresh Mittal, a computer science and economics student at the University of Chicago.
            Currently, I'm working at <a className='secondary-link' href='https://icosacomputing.com/' target='_blank' rel="noreferrer" style={{fontWeight: "600"}}>Icosa Computing </a>
            as a technical intern and building out <a className='secondary-link' href='https://github.com/vmittal27/hoops-head2head' target='_blank' rel="noreferrer" style={{fontWeight: "600"}}>Hoops Head2Head</a>,
            an online basketball trivia game.
            Please reach out at any time!
          </p>
          <p>You can see the source code for this site <a className='secondary-link' href='https://github.com/vmittal27/vmittal27.github.io' target='_blank' rel="noreferrer" style={{fontWeight: "600"}}>here</a>.</p>
          <p>You can see some of my other projects <a href="#projects" className='secondary-link' style={{fontWeight: "600"}}>below</a>.</p>
      </header>
      <header className='Content-header'> 
        <h2>Contact</h2>
      </header>
          <div className='Contacts'>
            <Contact
              link={'https://github.com/vmittal27'}
              icon={'fa-brands fa-square-github'}
            />
            <Contact
              link={'https://www.linkedin.com/in/vireshm'}
              icon={'fa-brands fa-linkedin'}
            />
            <Contact
              link={'mailto:vmittal@uchicago.edu'}
              icon={'fa-solid fa-envelope'}
            />
          </div>
        <header className='Content-header'>
          <h2>Projects</h2>
        </header>
        <div className='Project-container' id='projects'>
          <Project
            name="Hoops Head 2 Head"
            code_access="https://github.com/vmittal27/hoops-head2head"
            date="June 2024 – Present"
            description=
            {
              `Actively developing Hoops Head 2 Head, an online basketball trivia game where
              players try to connect NBA players through mutual teammates. 
              Features single-player and multiplayer modes, where two players can play against each
              other in realtime. 
              `
            }
            tags={
              [
                {'label': 'Python'},
                {'label': 'React.js'},
                {'label': 'Neo4j AuraDB'},
                {'label': 'Flask'},
                {'label': 'WebSocket'}, 
                {'label': 'Vite'}
              ]
            }
          />
          <Project
            name="Walk for Groot"
            code_access="https://github.com/vmittal27/uncommon-hacks-2024"
            date="March 2024"
            description=
            {`Award winning project developed at the UChicago Uncommon Hacks 2024 that calculates net carbon emissions
            between two points using the Google Maps API and a vehicle emissions profile stored in a MongoDB database.
            The website also uses a nearest neighbors algorithm to suggest a mix of walking and driving to reduce emissions. `}
            tags={
              [
                {'label': 'Python'},
                {'label': 'Google Maps API'},
                {'label': 'MongoDB'}, 
                {'label': 'BeautifulSoup'}
              ]
            }
            secondary_link="https://grooot.streamlit.app/"
            secondary_link_text="Demo"
          />
          <Project
            name="Langchain Icosa"
            code_access="https://github.com/Icosa-Computing/langchain-icosa"
            date="July – August 2024"
            description=
            {
              `PIP installable, open-source package of an automatic prompting pipeline for generative AI for use with the LangChain framework. 
              This uses a probabilistic solver to allow an LLM to offer better solutions to reasoning intensive tasks than other techniques. 
              I developed this package during my internship at Icosa Computing in the summer of 2024.
              `
            }
            tags={
              [
                {'label': 'Python'},
                {'label': 'LangChain'},
                {'label': 'LLM'},
                {'label': 'PyPI'},
              ]
            }
            secondary_link="https://pypi.org/project/langchain-icosa/"
            secondary_link_text="Install "
          />
          <Project
            name="Go"
            code_access="mailto:vmittal@uchicago.edu"
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
