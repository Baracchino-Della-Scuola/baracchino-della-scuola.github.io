import './Content.css';
import './tailwind.css'
import SocialIcon from './SocialIcons.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'


function Content() {
    
    return (
        <div className="main ">
            <div className="container px-4 mx-auto ">
                
                <div className="pt-10 pb-10 pl-20 pr-20 rounded-lg baracchino round-200 ">
                    <img src="https://cdn.discordapp.com/icons/838727867428765766/7cf87bc0938e38a5298c1caa32cfbb95.png?width=75" alt="" className="items-center justify-center rounded-full place-self-center"></img>
                    <h1 className="text-xl ">Baracchino della scuola</h1>
                    <p className="">Turning the school into a better place.</p>
                    
                    <SocialIcon href="https://discord.gg/8FRxa9Anh4" classes="social-icon hover:text-[#5865F2]" icon={<FontAwesomeIcon icon={brands('discord')} />} />
                    <SocialIcon href="https://github.com/Baracchino-Della-Scuola" classes="social-icon hover:text-stone-800" icon={<FontAwesomeIcon icon={brands('github')} />} />
                    <SocialIcon href="https://twitter.com/@baracchinosc" classes="social-icon hover:text-sky-400" icon={<FontAwesomeIcon icon={brands('twitter')} />} />
                    <SocialIcon href="https://www.youtube.com/channel/UCj2MjMPdNn8PZ6RveF5zZ5A" classes="social-icon hover:text-red-600" icon={<FontAwesomeIcon icon={brands('youtube')} />} />
                    <SocialIcon href="https://t.me/baracchinosc" classes="social-icon hover:text-sky-600" icon={<FontAwesomeIcon icon={brands('telegram')} />} />
                    <SocialIcon href="https://www.reddit.com/r/baracchinodellascuola" classes="social-icon hover:text-orange-600" icon={<FontAwesomeIcon icon={brands('reddit')} />} />
                    
                    <h1>Click <a href="/funny.png">here</a> for the funny</h1>
                </div>
            </div>
        </div>
    );
}

export default Content;
