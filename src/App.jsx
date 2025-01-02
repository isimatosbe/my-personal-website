import './App.css'

import Header from './components/header.jsx'
import Section from './components/section.jsx'

import aboutMe from './data/aboutMe.json'
import experience from './data/experience.json'
import education from './data/education.json'
import certifications from './data/certifications.json'

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
    </>
  )
}

export default App
