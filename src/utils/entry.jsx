function getDates(lang, startingDate, endingDate) {
    const begin = 
        typeof startingDate === 'undefined' ? '' :
        new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-ES', {
            'year': 'numeric',
            'month': 'long'
        }).format(new Date(startingDate))
    
    const beginFormat = (lang === 'en' || begin === '') ? begin : (begin[0].toUpperCase() + begin.slice(1).replace(' de', ''))

    const end = 
        typeof endingDate === 'undefined' ? '' :
        (
            endingDate === null ? (lang === "en" ? 'Present' : 'Actualidad') :
            new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-ES', {
                    'year': 'numeric',
                    'month': 'long'
                }).format(new Date(endingDate))
            )
    
    const endFormat = (lang === 'en' || end === '') ? end : (end[0].toUpperCase() + end.slice(1).replace(' de', ''))

    return (
        beginFormat + (end === '' ? '' : ' - ') + endFormat
    )
}

export default function Entry({ lang, description, startingDate, endingDate, organization, remarks }) {
    return (
        <div className="entry">
            <div key={description} className="entry-line" >
                <p className="bold">{organization}</p>
                <i className="entry-dates">{getDates(lang, startingDate, endingDate)}</i>
            </div>
            
            <div key={organization} className="entry-line" >
                <p>{description}</p>
                <i className="entry-remark">{remarks}</i>
            </div>
        </div>
    )
}