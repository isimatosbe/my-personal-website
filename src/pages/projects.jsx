import NavBar from '../components/navBar.jsx'
import Header from '../components/header.jsx'

import Project from '../utils/project.jsx'

import projects from '../data/projects.json'

export default function Projects() {
    return (
        <>
            <NavBar />
            <Header />
            <h2 className="bold">Projects</h2>
            <hr />
            <p>This section of the website will serve as a showcase of some projects I deem interesting to showcase.</p>
            <ul>
                {projects.map( project =>
                    <Project
                        key={project.title}
                        title={project.title} 
                        url={project.url} 
                        tags={project.tags} 
                        description={project.description} />
                )}
            </ul>
        </>
    )
}