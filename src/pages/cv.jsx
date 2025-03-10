import Home from './home'
import Header from '../components/layout/header'

import '../stylesheets/cv.css'

export default function CV({ lang }) {
    

    return (
        <div className="cv">
            <h1>CV</h1>
            <p>Add filter for technologies in the projects to choose</p>

            <div className="print" id="print">
                <Header lang={lang} />
                <Home lang={lang} />
            </div>
        </div>
    )

}