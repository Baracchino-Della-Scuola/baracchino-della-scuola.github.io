import './tailwind.css'
import './socialicons.scss'

function SocialIcon(props) {
    return (
        <a href={props.href} className={props.Classes}>{props.icon}</a>
    );
}

export default SocialIcon;