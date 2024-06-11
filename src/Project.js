import './App.css';

export default function Project({name, code_access, date, description, tags, demo = null}) {
    const html_tags = tags.map(tags => 
        <div className='Project-tag'>
            <b>{tags.label}</b>
        </div>
    ); 

    if (demo != null) {
        return (
            <div className='Project'>
                <header className='Project-header'>
                    <h3><a className='default-link' href={code_access} target='_blank' rel="noreferrer">{name}</a></h3>
                    <h4>{date}</h4>
                </header>
                <p>
                    {description}
                    <a className='secondary-link' style={{fontWeight: "600"}} href={demo} target='_blank' rel="noreferrer">Demo</a>
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
                <p>{description}</p>
                <footer className='Project-tag-container'>
                    {html_tags}
                </footer>
            </div>
        );
    }
}