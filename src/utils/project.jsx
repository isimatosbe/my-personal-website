import Tag from './tag'

export default function Project ( { title, url, tags, description } ) { 
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-start', columnGap: '0.2rem', alignItems: 'baseline'}}>
                {typeof url !== 'undefined' ? 
                    <li><a href={url}><span className="code" style={{marginRight: '0.25rem'}}>{title}</span></a></li> :
                    <li><span className="code" style={{marginRight: '0.25rem'}}>{title}</span></li>
                }
                {tags.map( tag =>
                    <Tag key={tag} tag={tag} />
                )}
            </div>

            <p>{description}</p>
        </div>
    )
}