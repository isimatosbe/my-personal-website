import Home from './home'
import Header from '../components/layout/header'
import Projects from './projects'

import '../stylesheets/cv.css'

export default function CV({ lang, printConfig }) {
    const useProjects = printConfig['useProjects']
    const fontSize = printConfig['fontSize']

    return (
        <div className="print" id="print" style={{fontSize: fontSize + "px"}} >
            <Header lang={lang} />
            <Home lang={lang} />
            {useProjects && <Projects lang={lang} />}
        </div>
    )
}