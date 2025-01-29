import Project from '../utils/project.jsx'

import projects from '../data/projects.json'

export default function Projects({ lang }) {

    const sortedProjects = 
        projects["data"].sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)

    const underDevelopment = sortedProjects.filter( project => project.live)
    const finishedProjects = sortedProjects.filter( project => !project.live)

    return (
        <>
            <h2 className="bold">{projects["title"][lang]}</h2>
            <hr />
            <p>{projects["description"][lang]}</p>
            <h3 className='semi-bold'>{projects["sections"][lang]["under-development"]}</h3>
            <ul>
                {underDevelopment.map( project =>
                    <Project
                        key={project[lang]["title"]}
                        title={project[lang]["title"]} 
                        url={project.url}
                        tags={project.tags} 
                        description={project[lang]["description"]} />
                )}
            </ul>

            <h3 className='semi-bold'>{projects["sections"][lang]["finished"]}</h3>
            <ul>
                {finishedProjects.map( project =>
                    <Project
                        key={project[lang]["title"]}
                        title={project[lang]["title"]} 
                        url={project.url}
                        tags={project.tags} 
                        description={project[lang]["description"]} />
            )}
            </ul>
        </>
    )
}