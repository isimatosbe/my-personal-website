import Skills from './skills.jsx'

import skills from '../data/skills.json'

export default function Header() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <img src="/assets/foto-cv.jpg" alt="Foto CV" width="20%" height="20%"
                 style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "35%"}}
            />
            <div style={{alignContent: 'space-between'}}>
                <h1>Isidro Matos Bellido</h1>
                <div style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
                    <a href="https://github.com/isimatosbe">
                        <img src="/assets/GitHub_Lockup_Dark.svg" alt="GitHub's Logo" width="100"/>
                    </a>
                    <a href="https://www.linkedin.com/in/isimatosbe">
                        <img src="/assets/LinkedIn-Blue.png" alt="LinkedIn's Logo" width="100"/>                
                    </a>
                </div>
                <Skills data={skills} />
            </div>
        </div>
    )
}