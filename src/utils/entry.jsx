function getDates(startingDate, endingDate) {
    const begin = 
        typeof startingDate === 'undefined' ? '' :
        new Intl.DateTimeFormat('en-US', {
            'year': 'numeric',
            'month': 'long'
        }).format(new Date(startingDate))
    
    const end = 
        typeof endingDate === 'undefined' ? '' :
        (
            endingDate === null ? ' - Present' :
            ' - ' +
            new Intl.DateTimeFormat('en-US', {
                    'year': 'numeric',
                    'month': 'long'
                }).format(new Date(endingDate))
            )

    return (
        begin + end
    )
}

export default function Entry({ description, startingDate, endingDate, organization, remarks }) {
    return (
        <div className="entry">
            <div key={description} className="entry-line" >
                <p className="bold">{organization}</p>
                <i>{getDates(startingDate, endingDate)}</i>
            </div>
            
            <div key={organization} className="entry-line" >
                <p>{description}</p>
                <i>{remarks}</i>
            </div>
        </div>
    )
}