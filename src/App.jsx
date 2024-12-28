import './App.css'
import Section from './components/section.jsx'
import aboutMe from './data/aboutMe.json'
import experience from './data/experience.json'
import education from './data/education.json'
import certifications from './data/certifications.json'
import skills from './data/skills.json'

function App() {
  
  return (
    <>
      <h1>Isidro Matos Bellido</h1>
      <Section key="AboutMe" title="About Me" texts={[aboutMe]} />
      <Section key="Experience" title="Experience" texts={experience}/>	
      <Section key="Education" title="Education" texts={education} />
      <Section key="Certifications" title="Certifications" texts={certifications} />
      <Section key="Skills" title="Skills" texts={skills} />
    </>
  )
}

export default App
