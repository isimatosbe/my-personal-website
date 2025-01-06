import '../stylesheets/home.css'

import Header from '../components/header.jsx'
import Resume from '../components/resume.jsx'
import NavBar from '../components/navBar.jsx'

export default function Home() {
  
  return (
    <>
      <NavBar />
      <Header />
      <Resume />
    </>
  )
}
