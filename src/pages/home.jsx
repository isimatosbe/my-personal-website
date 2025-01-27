import '../stylesheets/home.css'
import '../stylesheets/colors.css'

import Resume from '../components/resume.jsx'

export default function Home({ lang }) {
  
  return (
    <>
      <Resume lang={lang} />
    </>
  )
}
