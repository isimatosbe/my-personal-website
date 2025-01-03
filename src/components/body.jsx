import AboutMe from './aboutMe.jsx'
import Section from '../utils/section.jsx'

import experience from '../data/experience.json'
import education from '../data/education.json'
import certifications from '../data/certifications.json'

export default function Body() {
    return (
        <>
            <AboutMe />

            <Section key="Experience" title="Experience" data={experience} />	
            <Section key="Education" title="Education" data={education} />
            <Section key="Certifications" title="Certifications" data={certifications} />        
        </>
    )
}