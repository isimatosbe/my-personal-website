function getDates(lang, startingDate, endingDate) {
    const begin = 
        typeof startingDate === 'undefined' ? '' :
        new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-ES', {
            'year': 'numeric',
            'month': 'long'
        }).format(new Date(startingDate))
    
    const end = 
        typeof endingDate === 'undefined' ? '' :
        (
            endingDate === null ? ' - Present' :
            ' - ' +
            new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-ES', {
                    'year': 'numeric',
                    'month': 'long'
                }).format(new Date(endingDate))
            )

    return (
        begin + end
    )
}

export default function Entry({ lang, description, startingDate, endingDate, organization, remarks }) {
    return (
        <div className="entry">
            <div key={description} className="entry-line" >
                <p className="bold">{organization}</p>
                <i>{getDates(lang, startingDate, endingDate)}</i>
            </div>
            
            <div key={organization} className="entry-line" >
                <p>{description}</p>
                <i>{remarks}</i>
            </div>
        </div>
    )
}