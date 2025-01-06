import NavBar from '../components/navBar.jsx'
import Header from '../components/header.jsx'
import Section from '../utils/section.jsx'

export default function Projects() {
    return (
        <>
            <NavBar />
            <Header />
            <Section key="Projects" title="Projects" data={[]} />
        </>
    )
}