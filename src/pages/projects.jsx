import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'
import NavBar from '../components/navBar.jsx'
import ScrollToTop from '../utils/scrollToTop.jsx'

import Project from '../utils/project.jsx'

import projects from '../data/projects.json'

export default function Projects() {

    const sortedProjects = 
        projects.sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)

    const underDevelopment = sortedProjects.filter( project => project.live)
    const finishedProjects = sortedProjects.filter( project => !project.live)

    return (
        <>
            <NavBar />
            <Header />
            <h2 className="bold">Projects</h2>
            <hr />
            <p>This section of the website will serve as a showcase of some projects I deem interesting to showcase. The page will be divided in the projects I have already finished, or I am no longer working on, and those of them that I am actively working on. In the future I might even add a section for dropped projects.</p>
            <h3 className='semi-bold'>Under Development</h3>
            <ul>
                {underDevelopment.map( project =>
                    <Project
                        key={project.title}
                        title={project.title} 
                        url={project.url} 
                        tags={project.tags} 
                        description={project.description} />
                )}
            </ul>

            <h3 className='semi-bold'>Finished</h3>
            <ul>
                {finishedProjects.map( project =>
                    <Project
                        key={project.title}
                        title={project.title} 
                        url={project.url} 
                        tags={project.tags} 
                        description={project.description} />
                )}
            </ul>
            <ScrollToTop />
            <Footer />
        </>
    )
}