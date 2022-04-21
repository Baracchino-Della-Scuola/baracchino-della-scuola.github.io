import './Content.css';
import './tailwind.css'
import SocialIcon from './SocialIcons.js'



function Content() {
    
    return (
        <div className="main ">
            <div className="container mx-auto px-4 ">
                <div className="baracchino bg-white round-200 p-20 rounded-lg ">
                    <h1 className="text-xl">Baracchino della scuola</h1>
                    <p>Nothing to see here, ok?</p>
                    
                    <SocialIcon href="https://discord.com" classes="" icon="icons/discord.svg" />
                </div>
            </div>
        </div>
    );
}

export default Content;
