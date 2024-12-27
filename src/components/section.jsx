export default function Section({ title, texts }) {

    const sortedTexts = texts.sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)
    const dates = 
        title === "About Me" || title === "Skills" ? [] :
        sortedTexts
            .map( text => 
                    new Intl.DateTimeFormat('en-US', {
                                'year': 'numeric',
                                'month': 'long'
                            }).format(new Date(text.startingDate)) +
                    
                    (
                        typeof text.endingDate === 'undefined' ? '' :
                        ' - ' +
                        (
                            text.endingDate === null ? 'Present' :
                            new Intl.DateTimeFormat('en-US', {
                                    'year': 'numeric',
                                    'month': 'long'
                                }).format(new Date(text.endingDate))
                            )
                    )
                )

    return (
        <>
        <h2 key={title}>{title}</h2>
        {sortedTexts.map( (text, index) => 
            <>
                <div key={text.description} 
                    style={{'display': 'flex', 'justifyContent': 'space-between'}} >
                    <p>{text.description}</p>
                    <p>{dates[index]}</p>
                </div>
                
                <div key={text.organization} 
                 style={{'display': 'flex', 'justifyContent': 'space-between'}} >
                    <p>{text.organization}</p>
                    <p>{text.averageGrade}</p>
                </div>
            </>
            )
        }
        </>
    )
}