import AboutMe from '../sections/aboutMe.jsx'
import Section from '../../utils/section.jsx'

import experience from '../../data/experience.json'
import education from '../../data/education.json'
import certifications from '../../data/certifications.json'

export default function Resume({ lang }) {
    return (
        <>
            <AboutMe lang={lang} />
            <Section lang={lang} key={experience['title'][lang]} title={experience['title'][lang]} data={experience['data']} />	
            <Section lang={lang} key={education['title'][lang]} title={education['title'][lang]} data={education['data']} />
            <Section lang={lang} key={certifications['title'][lang]} title={certifications['title'][lang]} data={certifications['data']} />        
        </>
    )
}