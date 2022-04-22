import './tailwind.css'
import './socialicons.css'


function SocialIcon(props) {
    return (
        <a href={props.href} className={props.classes}>{ props.icon }</a>
    );
}

export default SocialIcon;