import '../../stylesheets/footer.css'

import rights from '../../data/footer.json'

export default function Footer({ lang, theme, setTheme, setLang }) {
    return (
        <footer className="footer" id="footer" >
            <div className="footer-links" >
                <div className="footer-link" >
                    <a className={theme !== 'dark' ? "footer-active" : ""} 
                        onClick={() => setTheme('light')} >
                        {lang === 'en' ? 'Light Mode' : 'Modo Claro'}
                    </a>
                    <p>|</p>
                    <a className={theme === 'dark' ? "footer-active" : ""}
                        onClick={() => setTheme('dark')} >
                        {lang === 'en' ? 'Dark Mode' : 'Modo Oscuro'}
                    </a>
                </div>
                <div className="footer-link" >
                    <a href="https://github.com/isimatosbe">GitHub</a>
                    <p>|</p>
                    <a href="https://www.linkedin.com/in/isimatosbe">LinkedIn</a>
                </div>
                <div className="footer-link" >
                    <a className={lang === 'en' ? "footer-active" : ""}
                        onClick={() => setLang('en')} >
                        {lang === 'en' ? 'English' : 'Inglés'}
                    </a> 
                    <p>|</p>
                    <a className={lang !== 'en' ? "footer-active" : ""}
                        onClick={() => setLang('es')} >
                        {lang === 'en' ? 'Spanish' : 'Español'}
                    </a>
                </div>
            </div>
            <p>Copyright © {(new Date().getFullYear())} Isidro Matos Bellido. {rights[lang]}</p>
        </footer>
    )
}