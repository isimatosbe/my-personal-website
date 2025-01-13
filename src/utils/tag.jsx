import { tagInfo } from "../data/constants"

export default function Tag ( { tag }) {
    const cleanTag = tag.toLowerCase() in tagInfo ? tag.toLowerCase() : 'generic'
    const {color, background, name} = tagInfo[cleanTag]

    return (
        <span className="tag" style={{color: color, background: background}}>{"#" + ('Generic' === name ? tag : name)}</span>
    )
}