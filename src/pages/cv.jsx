import Home from './home'
import Header from '../components/layout/header'
import Projects from './projects'

import '../stylesheets/cv.css'

export default function CV({ lang }) {
    return (
        <div className="print" id="print">
            <Header lang={lang} />
            <Home lang={lang} />
            <Projects lang={lang} />
        </div>
    )
}