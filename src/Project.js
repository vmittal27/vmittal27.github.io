import './App.css';

export default function Project({name, link, date, description, tags}) {
    const html_tags = tags.map(tags => 
        <div className='Project-tag'>
            <b>{tags.label}</b>
        </div>
    ); 

    return (
        <div className='Project'>
            <header className='Project-header'>
                <h3><a className='default-link' href={link}>{name}</a></h3>
                <h4>{date}</h4>
            </header>
            <p>{description}</p>
            <footer className='Project-tag-container'>
                {html_tags}
            </footer>
        </div>
    );
}