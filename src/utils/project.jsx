import Tag from './tag'

export default function Project ( { title, url, tags, description, onClick } ) { 
    return (
        <div>
            <div className="project">
                {typeof url !== 'undefined' ? 
                    <li><a href={url}><span className="code" >{title}</span></a></li> :
                    <li><span className="code" >{title}</span></li>
                }
                {typeof tags !== 'undefined' ?
                    tags.map( tag =>
                        <Tag key={tag} tag={tag} onClick={onClick} />
                    ) :
                    <></>
                }
            </div>

            <p>{description}</p>
        </div>
    )
}