import './App.css';

export default function Project({name, code_access, date, description, tags, secondary_link = null, secondary_link_text = null}) {
	const html_tags = tags.map(tags => 
		<div className='Project-tag'>
			<b>{tags.label}</b>
		</div>
	); 

	if (secondary_link != null && secondary_link_text != null) {
		return (
			<div className='Project'>
				<header className='Project-header'>
					<h3><a className='default-link' href={code_access} target='_blank' rel="noreferrer">{name}</a></h3>
					<h4>{date}</h4>
				</header>
				<p>
					{description.split('\n\n').map((line, index) => (
						<p key={index}>{line}</p>
					))}
					<a className='secondary-link' style={{fontWeight: "600"}} href={secondary_link} target='_blank' rel="noreferrer">{secondary_link_text}</a>
				</p>
				<footer className='Project-tag-container'>
					{html_tags}
				</footer>
			</div>
		);
	}

	else {
		return (
			<div className='Project'>
				<header className='Project-header'>
					<h3><a className='default-link' href={code_access}>{name}</a></h3>
					<h4>{date}</h4>
				</header>
				{description.split('\n\n').map((line, index) => (
					<p key={index}>{line}</p>
				))}
				<footer className='Project-tag-container'>
					{html_tags}
				</footer>
			</div>
		);
	}
}