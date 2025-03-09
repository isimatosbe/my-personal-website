import aboutMe from '../../data/aboutMe.json'

export default function AboutMe( { lang }) {
    const onClickHandle = () => {
        window.print()
        /*window.open("/cv", "_self")*/
    }

    return (
        <div key="AboutMe" id="AbutMe" >
            <h2 className="section">{aboutMe[lang]['title']}</h2>
            <hr />
            <p>{aboutMe[lang]['description']}</p>
            <button onClick={onClickHandle}>Download CV</button>
        </div>
    )
}