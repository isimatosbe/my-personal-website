import { levelDescrition } from "../data/constants"

function Skill ({ lang, description, level, category }) {
    const color = 
        category === "Programming Language" ? "var(--accent)" :
        category === "Language" ? "var(--language-skill)" : 
        "var(--generic-skill)"

    const colorArray = Array.from({length:5},(_,i)=>i < level ? color : "var(--grey-skill)" )

    return (
        <div className="skill-line">
            <p className="semi-bold">{description}</p>
            <div title={levelDescrition[lang][level]} 
                className="skill-level">
                {colorArray.map(( color, index ) => 
                    <span key={"dot_" + index} className="skill-dot" style={{backgroundColor: color}}></span>
                    )
                }
            </div>
            
        </div>
    )
}

export default function Skills ({ lang, data }) {
    return (
        <div className="skill-container">
            {data.map( (skill) => 
                <Skill
                    lang={lang}
                    key={skill.description}
                    description={skill.description[lang]}
                    level={skill.level}
                    category={skill.category}
                    />
                )
            }
        </div>
    )
}