import '../../stylesheets/header.css';
import Skills from '../sections/skills.jsx';
import skills from '../../data/skills.json';

export default function Header({ lang, theme }) {
  const contrastTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <div className="header" id="header" >
      <img src="/assets/cv-photo.jpg" alt="CV's Photo" width="20%" height="20%" className="cv-photo" />
      <div className="header-data">
        <h1>Isidro Matos Bellido</h1>
        <div className="socials">
          <a href="https://github.com/isimatosbe">
            <img className="logo" src={`/assets/logos/GitHub_Lockup_${contrastTheme}.svg`} alt="GitHub's Logo" height="30px" />
          </a>
          <a href="https://www.linkedin.com/in/isimatosbe">
            <img className="logo" src={`/assets/logos/LinkedIn-${contrastTheme}.png`} alt="LinkedIn's Logo" height="30px" />
          </a>
        </div>
        <Skills lang={lang} data={skills} />
      </div>
    </div>
  );
}