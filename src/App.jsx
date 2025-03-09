import { BrowserRouter, Routes, Route } from 'react-router';
import { lazy } from 'react';
import LanguageDetector from 'i18next-browser-languagedetector';
import useLocalStorage from 'use-local-storage';

import './stylesheets/base.css'
import './stylesheets/body.css'
import './stylesheets/buttons.css'
import './stylesheets/navbar.css'
import './stylesheets/searchbar.css'

const Home = lazy(() => import('./pages/home.jsx'))
const Projects = lazy(() => import('./pages/projects.jsx'))

import Footer from './components/layout/footer.jsx';
import Header from './components/layout/header.jsx';
import NavBar from './components/layout/navBar.jsx';

import LanguageChanger from './components/common/languageChanger.jsx';
import ScrollToTop from './components/common/scrollToTop.jsx';
import ThemeChanger from './components/common/themeChanger.jsx';

export default function App() {
    const languageDetector = new LanguageDetector();
    const defaultLanguage = languageDetector.detect().slice(0, 2);
    const [lang, setLang] = useLocalStorage('lang', defaultLanguage);

    const switchLang = () => {
        const newLang = lang === 'en' ? 'es' : 'en';
        setLang(newLang);
    }

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme} id="app" >
            <BrowserRouter>
                <div className="top-bar" id="top-bar">
                    <ThemeChanger onClick={switchTheme} theme={theme} />
                    <NavBar lang={lang} />    
                    <LanguageChanger onClick={switchLang} lang={lang} />
                </div>
                
                <Header lang={lang} theme={theme} />
    
                <Routes>
                    <Route path="/" element={<Home lang={lang} />} />
                    <Route path="/projects" element={<Projects lang={lang} />} />
                    <Route path="/cv" element={<h1>CV</h1>} />
                </Routes>
                
                <ScrollToTop />
                <Footer 
                    lang={lang} setLang={setLang}
                    theme={theme} setTheme={setTheme} />
            </BrowserRouter>
        </div>
    )
}
  
