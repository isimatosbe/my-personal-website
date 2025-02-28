import { useState } from 'react'
import Project from '../utils/project.jsx'
import SearchBar from '../utils/searchBar.jsx'

import Tag from '../utils/tag.jsx'

import projects from '../data/projects.json'
import { projectSectionOrder } from '../data/constants.js'

function ProjectConstructor( { lang, list, name, onClick } ) {
    return (
        <div id={name} >
            <h3 className="semi-bold">{projects['sections'][lang][name]}</h3>
            <ul>
                {list.map( project =>
                    <Project
                        key={project[lang]['title']}
                        title={project[lang]['title']} 
                        url={project.url}
                        tags={project.tags.sort()}
                        description={project[lang]['description']}
                        onClick={onClick} />
                )}
            </ul>
        </div>
    )
}

export default function Projects({ lang }) {
    const [value, setValue] = useState('');
    const [tags, setTags] = useState([]);

    const handleTagClick = (tag) => {
        if (tags.includes(tag)) {
            setTags(tags.filter( t => t !== tag))
        } else {
            setTags([...tags, tag])
        }
    }

    const sortedProjects = 
        projects['data'].sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)

    const filteredProjects = sortedProjects.filter( project => {
        const searchValue = value.replaceAll('-', ' ').toLowerCase()

        return (
            (project[lang]['title'].replaceAll('-', ' ').toLowerCase().includes(searchValue) ||
            project[lang]['description'].toLowerCase().includes(searchValue) ||
            project.tags.some( tag => tag.toLowerCase().includes(searchValue)) ||
            projects['sections'][lang][project.status].toLowerCase().includes(searchValue) ||
            value === '') &&
            (tags.length === 0 || 
            tags.every( tag => project.tags.includes(tag)))
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

            {tags.length > 0 &&
                <div className="project" >
                    <p className="code">{lang === 'en' ? 'Filtered tags:' : 'Tags filtrados:'}</p>
                    {tags.map( tag =>
                        <Tag key={tag} tag={tag} onClick={handleTagClick} />
                    )}
                </div>
            }
            
            {filteredProjects.length === 0 ? 
                <p className="grey" >{projects['noResults'][lang]}</p> :
                projectSections.map( (section) => 
                    <ProjectConstructor
                        key={section}
                        lang={lang}
                        list={groupedProjects[section]}
                        name={section} 
                        onClick={handleTagClick} />
                    )
            }
        </div>
    )
}