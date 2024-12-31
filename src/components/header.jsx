export default function Header() {
    return (
        <div style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
            <img src="src/assets/foto-cv.jpg" alt="Foto CV" width="200"
                 style={{borderRadius: 100}}
            />
            <div>
                <h1>Isidro Matos Bellido</h1>
                <div style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
                    <a href="https://github.com/isimatosbe">
                        <img src="src/assets/Github_Lockup_Dark.svg" alt="GitHub's Logo" width="100"/>
                    </a>
                    <a href="https://www.linkedin.com/in/isimatosbe">
                        <img src="src/assets/LinkedIn-Blue.png" alt="LinkedIn's Logo" width="100"/>                
                    </a>
                </div>
            </div>
        </div>
    )
}