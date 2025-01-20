import '../stylesheets/home.css'

import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'
import NavBar from '../components/navBar.jsx'
import Resume from '../components/resume.jsx'
import ScrollToTop from '../utils/scrollToTop.jsx'

export default function Home() {
  
  return (
    <>
      <NavBar />
      <Header />
      <Resume />
      <ScrollToTop />
      <Footer />
    </>
  )
}
