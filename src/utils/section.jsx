import Entry from './entry.jsx'

export default function Section({ title, data }) {
    const sortedData = 
        data.sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)

    return (
        <div key={title}>
            <h2 className="bold">{title}</h2>
            <hr />
            {sortedData.map( entry => 
                <Entry 
                    key={entry.description}
                    description={entry.description} 
                    startingDate={entry.startingDate}
                    endingDate={entry.endingDate}
                    organization={entry.organization}
                    remarks={entry.averageGrade}
                    />
                )
            }
        </div>
    )
}