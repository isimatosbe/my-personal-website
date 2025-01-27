import { BrowserRouter, Routes, Route } from "react-router";
import LanguageDetector from 'i18next-browser-languagedetector';

import NavBar from './components/navBar.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ScrollToTop from './components/scrollToTop.jsx';
import ThemeChanger from "./components/themeChanger.jsx";

import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx';
import useLocalStorage from "use-local-storage";

export default function App() {
    const languageDetector = new LanguageDetector();
    const defaultLanguage = languageDetector.detect();
    const [lang, setLang] = useLocalStorage("lang", defaultLanguage);

    const switchLang = () => {
        const newLang = lang === 'en-US' ? 'es-ES' : 'en-US';
        setLang(newLang);
    }

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <BrowserRouter>
                <button onClick={switchLang} className="langButton">{lang === 'en-US' ? 'Español' : 'English'}</button>
                <NavBar lang={lang} />
                <Header lang={lang} theme={theme} />
    
                <Routes>
                    <Route path="/" element={<Home lang={lang} />} />
                    <Route path="/projects" element={<Projects lang={lang} />} />
                </Routes>
                <ScrollToTop />
                <ThemeChanger onClick={switchTheme} theme={theme} />
                <Footer lang={lang} />
            </BrowserRouter>
        </div>
    )
}
  
