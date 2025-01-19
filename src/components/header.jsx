import Skills from './skills.jsx'

import skills from '../data/skills.json'

export default function Header() {
    return (
        <div className="header">
            <img src="/assets/foto-cv.jpg" alt="Foto CV" width="20%" height="20%"
                 className="cv-photo" />
                 
            <div className="header-data">
                <h1>Isidro Matos Bellido</h1>

                <div className="socials">
                    <a href="https://github.com/isimatosbe">
                        <img src="/assets/logos/GitHub_Lockup_Dark.svg" alt="GitHub's Logo" width="100px" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/isimatosbe">
                        <img src="/assets/logos/LinkedIn-Blue.png" alt="LinkedIn's Logo" width="100px" />                
                    </a>
                </div>

                <Skills data={skills} />
            </div>
        </div>
    )
}