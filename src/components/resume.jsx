import AboutMe from './aboutMe.jsx'
import Section from '../utils/section.jsx'

import experience from '../data/experience.json'
import education from '../data/education.json'
import certifications from '../data/certifications.json'

export default function Resume({ lang }) {
    return (
        <>
            <AboutMe lang={lang} />
            <Section lang={lang} key="Experience" title="Experience" data={experience} />	
            <Section lang={lang} key="Education" title="Education" data={education} />
            <Section lang={lang} key="Certifications" title="Certifications" data={certifications} />        
        </>
    )
}