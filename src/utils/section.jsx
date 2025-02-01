import Entry from './entry.jsx'

export default function Section({ lang, title, data }) {
    const sortedData = 
        data.sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)

    return (
        <div key={title}>
            <h2 className="bold">{title}</h2>
            <hr />
            {sortedData.map( entry => 
                <Entry 
                    lang={lang}
                    key={entry[lang]["description"]}
                    description={entry[lang]["description"]} 
                    startingDate={entry.startingDate}
                    endingDate={entry.endingDate}
                    organization={entry[lang]["organization"]}
                    remarks={entry[lang]["remark"]}
                    />
                )
            }
        </div>
    )
}