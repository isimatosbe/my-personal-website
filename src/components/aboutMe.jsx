import aboutMe from '../data/aboutMe.json'

export default function AboutMe() {
    return (
        <div key="AboutMe">
            <h2 className="section">About Me</h2>
            <hr />
            <p>{aboutMe.description}</p>
        </div>
    )
}