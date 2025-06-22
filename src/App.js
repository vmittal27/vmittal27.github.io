// TODO:
// 2. Add Experience section
// 3. Fix intro text
// 4. Change link formatting
import './App.css';
import './Project.js'
import './Contact.js'
import Contact from './Contact.js';
import Project from './Project.js';
import resume from './assets/resume.pdf';
import sandlabLogo from './assets/sandlab.png';
import icosaLogo from './assets/icosa.png';
import iopLogo from './assets/iop.png';
import denoraLogo from './assets/denora.png';

function App() {
	
	return (
		<div className='App'>
			<header className='App-header'>
				<h3><a className='nav-link' href='/' target='_blank' rel="noreferrer">HOME</a></h3>
				<h3><a className='nav-link' href={resume} target='blank' >RESUME</a></h3>
				<h3><a className='nav-link' href='#contact'>CONTACT</a></h3>
			</header>
			<div className="Content-header">
				<h1>VIRESH MITTAL</h1>
					<br/>
					<p>I am a junior at the University of Chicago studying computer science and economics.</p>
					<p>
						I am broadly interested in data engineering, scalable infrastructure and systems, and adversarial machine learning.
						I am currently looking for Summer 2026 internships!
					</p>
					<p>
						I enjoy cooking, watching football, and watching movies in my free time.
					</p>
					<p>You can see the source code for this site <a className='secondary-link' href='https://github.com/vmittal27/vmittal27.github.io' target='_blank' rel="noreferrer" style={{fontWeight: "600"}}>here</a>.</p>
			</div>
			<header className='Content-header'>
				<h2>Experience</h2>
				<div>
					<a href='https://sandlab.cs.uchicago.edu/' target='_blank' rel="noreferrer">
						<img src={sandlabLogo} className='logo' />
					</a>
					<a href='https://icosacomputing.com/' target='_blank' rel="noreferrer">
						<img src={icosaLogo} className='logo' />
					</a>
					<a href='https://politics.uchicago.edu/' target='_blank' rel="noreferrer">
						<img src={iopLogo} className='logo' />
					</a>
					<a href='https://www.denora.com/' target='_blank' rel="noreferrer">
						<img src={denoraLogo} className='logo' />
					</a>
				</div>
			</header>

			<header className='Content-header' id='contact'> 
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
				<header className='Content-header' id='projects'>
					<h2>Projects</h2>
				</header>
				<div className='Project-container'>
					<Project
						name="Hermes"
						code_access="https://github.com/vmittal27/uchicago-trading-comp"
						date="March – April 2025"
						description=
						{
							`
							Trading bot that got 6th place in Case 1 of the 2025 UChicago Trading Competition.

							Hermes can identify ETF arbitrage opportunities as well as
							individual stock mispricing after news events.

							`
						}
						tags={
							[ 
								{'label': 'Python'},
								{'label': 'NumPy'},
								{'label': 'Asyncio'},
							]
						}
					/>
					<Project
						name="File Compressor"
						code_access="https://github.com/vmittal27/file-compressor/"
						date="Nov – Dec 2024"
						description=
						{
							`A full lossless compression suite using an improved adaptive version of 
							Lempel-Ziv-Welch compression with 15% higher compression ratios.
							

							Includes a full unit testing framework written in Bash.`
						}
						tags={
							[ 
								{'label': 'C'},
								{'label': 'Bash Scripting'}, 
								{'label': 'File Compression'}, 
							]
						}
					/>
					<Project
						name="V Shell"
						code_access="https://github.com/vmittal27/vshell"
						date="Nov – Dec 2024"
						description=
						{
							`UNIX shell with support for all UNIX commands and file redirection written in C.

							Supports standard, prepend, and append redirection modes.`
						}
						tags={
							[
								{'label': 'C'},
								{'label': 'UNIX'},
								{'label': 'Bash'}, 
							]
						}
					/>
					<Project
						name="Hoops Head 2 Head"
						code_access="https://github.com/vmittal27/hoops-head2head"
						date="June – Sept 2024"
						description=
						{
							`An online basketball trivia game where
							players try to connect NBA players through mutual teammates.


							Features single-player and multiplayer modes, where two players can play against each
							other in realtime.`
						}
						tags={
							[ 
								{'label': 'Python'},
								{'label': 'React.js'},
								{'label': 'Neo4j'},
								{'label': 'GCP'}
							]
						}
						secondary_link='https://hoopsh2h.sv2projects.com/'
						secondary_link_text='Try it out!'
					/>
				</div>
		</div>
	);
}

export default App;
