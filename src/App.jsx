import './App.css'

import Section from './components/section.jsx'
import Header from './components/header.jsx'

import aboutMe from './data/aboutMe.json'
import experience from './data/experience.json'
import education from './data/education.json'
import certifications from './data/certifications.json'
import skills from './data/skills.json'

function App() {
  
  return (
    <>
      <Header />
      <h2 className='section'>About Me</h2>
      <hr />
      <p>{aboutMe.description}</p>

      <Section key="Experience" title="Experience" data={experience} />	

      <Section key="Education" title="Education" data={education} />

      <Section key="Certifications" title="Certifications" data={certifications} />
      
      <Section key="Skills" title="Skills" data={skills} />
    </>
  )
}

export default App
