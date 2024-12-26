export default function Section({ title, texts }) {

    const sortedTexts = texts.sort((a, b) => new Date(a.startingDate) <= new Date(b.startingDate) ? 1 : -1)
    
    return (
        <>
        <h2 key={title}>{title}</h2>
        {sortedTexts.map( text => <p key={text.description}>{text.description}</p>)}
        </>
    )
}