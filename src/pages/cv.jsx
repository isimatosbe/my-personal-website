import Home from './home'
import Header from '../components/layout/header'
import Projects from './projects'

import '../stylesheets/cv.css'

export default function CV({ lang, printConfig }) {
    const useProjects = printConfig['useProjects']
    const fontSize = printConfig['fontSize']
    const padding = printConfig['padding']

    return (
        <div className="print" id="print" 
            style={
                {
                    fontSize: fontSize + "px", 
                    padding: padding + "em", 
                    minHeight: "calc(297mm - 2*" + padding + "em)",
                    width: "calc(210mm - 2*" + padding + "em)"
                }
            } >
            <Header lang={lang} />
            <Home lang={lang} />
            {useProjects && <Projects lang={lang} />}
        </div>
    )
}