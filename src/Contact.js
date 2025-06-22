export default function Contact({link, icon}) {
	return (
		<a href={link} target='_blank' rel="noreferrer">
			<button type='button' >
			<i class={icon} style={{fontSize:"4em", color:"black"}}></i>
			</button>
		</a>   
	);
}