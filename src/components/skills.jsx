import { levelDescrition } from "../data/constants"

function Skill ({ description, level, category }) {
    const color = 
        category === "Programming Language" ? "#4E8FDF" :
        category === "Language" ? "#75B761" : 
        "#E45050"

    const colorArray = Array.from({length:5},(_,i)=>i < level ? color : "#BBB" )

    return (
        <div className="skill-line">
            <p className="semi-bold">{description}</p>
            <div title={levelDescrition[level]} 
                className="skill-level">
                {colorArray.map(( color, index ) => 
                    <span key={"dot_" + index} className="skill-dot" style={{backgroundColor: color}}></span>
                    )
                }
            </div>
            
        </div>
    )
}

export default function Skills ({ data }) {
    return (
        <div className="skill-container">
            {data.map( (skill) => 
                <Skill 
                    key={skill.description}
                    description={skill.description}
                    level={skill.level}
                    category={skill.category}
                    />
                )
            }
        </div>
    )
}