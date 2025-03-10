import { tagInfo } from '../data/constants'

export default function Tag ( { tag, onClick }) {
    const lowerCaseName = tag.toLowerCase()
    const cleanTag = lowerCaseName in tagInfo ? tag.toLowerCase() : 'generic'
    const name = tagInfo[cleanTag]

    return (
        <span 
            className="tag semi-bold" 
            style={
                {
                    color: 'var(--' + lowerCaseName + '-color)', 
                    background: 'var(--' + lowerCaseName + '-bg)'
                }
            }
            onClick={() => onClick(tag)}
            >
                {'#' + ('Generic' === name ? tag : name)}
        </span>
    )
}