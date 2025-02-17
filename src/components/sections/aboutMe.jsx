import aboutMe from '../../data/aboutMe.json'

export default function AboutMe( { lang }) {
    return (
        <div key="AboutMe">
            <h2 className="section">{aboutMe[lang]['title']}</h2>
            <hr />
            <p>{aboutMe[lang]['description']}</p>
        </div>
    )
}