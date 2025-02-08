import Project from '../utils/project.jsx'

import projects from '../data/projects.json'

function ProjectConstructor( { lang, list, name } ) {
    return (
        <>
            <h3 className='semi-bold'>{projects["sections"][lang][name]}</h3>
            <ul>
                {list.map( project =>
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

export default function Projects({ lang }) {

    const sortedProjects = 
        projects["data"].sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)

    const underDevelopment = sortedProjects.filter( project => project.status === "live")
    const finishedProjects = sortedProjects.filter( project => project.status === "finished")
    const droppedProjects = sortedProjects.filter( project => project.status === "dropped")

    return (
        <>
            <h2 className="bold">{projects["title"][lang]}</h2>
            <hr />
            <p>{projects["description"][lang]}</p>

            <ProjectConstructor
                lang={lang}
                list={underDevelopment}
                name="under-development" />

            <ProjectConstructor
                lang={lang}
                list={finishedProjects}
                name="finished" />
                
            <ProjectConstructor
                lang={lang}
                list={droppedProjects}
                name="dropped" />
        </>
    )
}