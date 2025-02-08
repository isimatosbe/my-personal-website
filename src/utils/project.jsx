import Tag from './tag'

export default function Project ( { title, url, tags, description } ) { 
    return (
        <div>
            <div className="project">
                {typeof url !== 'undefined' ? 
                    <li><a href={url}><span className="code" >{title}</span></a></li> :
                    <li><span className="code" >{title}</span></li>
                }
                {tags.map( tag =>
                    <Tag key={tag} tag={tag} />
                )}
            </div>

            <p>{description}</p>
        </div>
    )
}