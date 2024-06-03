export default function Contact({link, icon}) {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <button type='button' >
            <img src={icon} />
            </button>
        </a>   
    );
}