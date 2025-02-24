import { useState } from 'react'
import Project from '../utils/project.jsx'
import SearchBar from '../utils/searchBar.jsx'

import projects from '../data/projects.json'
import { projectSectionOrder } from '../data/constants.js'

function ProjectConstructor( { lang, list, name } ) {
    return (
        <div id={name} >
            <h3 className="semi-bold">{projects['sections'][lang][name]}</h3>
            <ul>
                {list.map( project =>
                    <Project
                        key={project[lang]['title']}
                        title={project[lang]['title']} 
                        url={project.url}
                        tags={project.tags} 
                        description={project[lang]['description']} />
                )}
            </ul>
        </div>
    )
}

export default function Projects({ lang }) {
    const [value, setValue] = useState('');

    const sortedProjects = 
        projects['data'].sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)

    const filteredProjects = sortedProjects.filter( project => {
        const searchValue = value.replaceAll('-', ' ').toLowerCase()

        return (
            project[lang]['title'].replaceAll('-', ' ').toLowerCase().includes(searchValue) ||
            project[lang]['description'].toLowerCase().includes(searchValue) ||
            project.tags.some( tag => tag.toLowerCase().includes(searchValue)) ||
            projects['sections'][lang][project.status].toLowerCase().includes(searchValue) ||
            value === ''
        )
    })

    const groupedProjects = filteredProjects.reduce((groups, project) => {
        (groups[project.status] = groups[project.status] || []).push(project);
        return groups;
    }, {});

    const projectSections = Object.keys(groupedProjects).sort((a, b) => projectSectionOrder[a] < projectSectionOrder[b] ? -1 : 1)

    return (
        <div id="projects" >
            <div className="projects-title" >
                <h2 className="bold">{projects['title'][lang]}</h2>
                <SearchBar lang={lang} section={projects['title'][lang]} value={value} setValue={setValue} />
            </div>
            <hr />
            
            <p>{projects['description'][lang]}</p>

            {projectSections.map( (section) => 
                <ProjectConstructor
                    key={section}
                    lang={lang}
                    list={groupedProjects[section]}
                    name={section} />
                )
            }
        </div>
    )
}