const tagInfo = { 
    'github': 
        {
            color: '#fff',
            background: '#1B1F24',
            name: 'GitHub'
        },
    'react': 
        {
            color: '#222e2f',
            background: '#61DBFB',
            name: 'React'
        },
    'generic': 
        {
            background: '#222e2f',
            color: '#fff',
            name: 'Generic'
        }
}

export default function Tag ( { tag }) {
    const cleanTag = tag.toLowerCase() in tagInfo ? tag.toLowerCase() : 'generic'
    const {color, background, name} = tagInfo[cleanTag]

    return (
        <span className="tag" style={{color: color, background: background}}>{"#" + ('Generic' === name ? tag : name)}</span>
    )
}