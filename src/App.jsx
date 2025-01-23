import { BrowserRouter, Routes, Route } from "react-router";
import useLocalStorage from "use-local-storage";

import NavBar from './components/navBar.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ScrollToTop from './utils/scrollToTop.jsx';

import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx';

export default function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className="app" data-theme={theme}>
            <BrowserRouter>
                <button onClick={switchTheme}>Switch Theme</button>
                <NavBar />
                <Header />
      
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>

                <Footer />
                <ScrollToTop />
            </BrowserRouter>
        </div>
    )
}
  
