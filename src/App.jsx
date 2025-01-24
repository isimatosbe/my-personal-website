import { BrowserRouter, Routes, Route } from "react-router";

import NavBar from './components/navBar.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ScrollToTop from './utils/scrollToTop.jsx';

import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx';
import useLocalStorage from "use-local-storage";

export default function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.setAttribute("data-theme", newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <BrowserRouter>
                <button onClick={switchTheme}>Switch Theme</button>
                <NavBar />
                <Header theme={theme}/>
    
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <ScrollToTop />
                <Footer />
            </BrowserRouter>
        </div>
    )
}
  
